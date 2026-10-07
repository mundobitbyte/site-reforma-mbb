"""API temporária e clientes HTTP: não usa banco de trabalho ou navegador."""
from pathlib import Path
from datetime import date
import json
import os
import socket
import sys
import subprocess
import tempfile
import time
import urllib.request

ROOT=Path(__file__).resolve().parents[4]
SERVICE=ROOT/'laboratorio/cantina-evolutiva'
PYTHON=sys.executable
with tempfile.TemporaryDirectory() as pasta:
    p=Path(pasta)
    (p/'http_cantina14.py').write_text('from datetime import date\nfrom app import criar_app\napp=criar_app('+repr(str(p/'cantina.sqlite3'))+', hoje=lambda: date(2026,10,7))\n', encoding='utf-8')
    with socket.socket() as sock:
        sock.bind(('127.0.0.1',0));port=sock.getsockname()[1]
    env=os.environ.copy();env['PYTHONPATH']=str(p)+os.pathsep+str(SERVICE)
    env['PYTHONUTF8']='1'
    with (p/'server.log').open('w', encoding='utf-8') as logs:
        proc=subprocess.Popen([PYTHON,'-m','uvicorn','http_cantina14:app','--host','127.0.0.1','--port',str(port)],cwd=SERVICE,env=env,stdout=logs,stderr=logs)
        try:
            base=f'http://127.0.0.1:{port}/'
            for tentativa in range(100):
                if proc.poll() is not None:raise RuntimeError((p/'server.log').read_text(encoding='utf-8', errors='replace'))
                try:
                    with urllib.request.urlopen(base+'openapi.json',timeout=1) as response:
                        spec=json.load(response)
                    break
                except OSError:time.sleep(.05)
            else:raise RuntimeError('API temporária não iniciou')
            contract=json.loads((ROOT/'laboratorio/percurso-mbb/web-api/contrato-http.json').read_text(encoding='utf-8'))
            for e in contract['operacoes']:
                assert e['metodo'].lower() in spec['paths'][e['rota']]
                assert str(e['sucesso']) in spec['paths'][e['rota']][e['metodo'].lower()]['responses']
            run=subprocess.run(['node',str(ROOT/'laboratorio/percurso-mbb/web-api/tests/http-local.mjs'),base],capture_output=True,encoding='utf-8',errors='replace',timeout=20)
            assert run.returncode==0,(run.stdout,run.stderr,(p/'server.log').read_text(encoding='utf-8', errors='replace'))
            result=json.loads(run.stdout)
            result['operacoes_openapi_conferidas']=4
            print(json.dumps(result,ensure_ascii=False))
        finally:
            proc.terminate()
            try:proc.wait(timeout=5)
            except subprocess.TimeoutExpired:proc.kill();proc.wait(timeout=5)
