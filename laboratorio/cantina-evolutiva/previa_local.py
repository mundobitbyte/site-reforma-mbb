"""Aplicação e percurso no mesmo servidor local, com banco descartável de ensaio."""
import argparse
from datetime import date
from pathlib import Path
import sys
import tempfile


ROOT = Path(__file__).resolve().parents[2]
HOST = '127.0.0.1'
DATA_ENSAIO = date(2026, 10, 7)
MATERIAIS = (
    'laboratorio/percurso-mbb', 'laboratorio/cantina-evolutiva',
    'css', 'js', 'pages', 'assets', 'downloads',
    'qts/cantina-horizonte-v1', 'docs/reforma',
)


def porta_local(texto):
    try:
        porta = int(texto)
    except ValueError:
        raise argparse.ArgumentTypeError('A porta precisa ser um inteiro de 1 a 65535.')
    if not 1 <= porta <= 65535:
        raise argparse.ArgumentTypeError('A porta precisa ser um inteiro de 1 a 65535.')
    return porta


def criar_previa(caminho_banco):
    from app import criar_app
    from fastapi import HTTPException
    from fastapi.staticfiles import StaticFiles
    from starlette.routing import Mount

    class MaterialEstudo(StaticFiles):
        async def get_response(self, path, scope):
            partes = Path(path).parts
            if (any(p.startswith('.') or p in {'dados', 'node_modules', '__pycache__'}
                    for p in partes)
                    or Path(path).suffix.lower() in {'.db', '.sqlite', '.sqlite3', '.pyc'}):
                raise HTTPException(status_code=404)
            return await super().get_response(path, scope)

    app = criar_app(caminho_banco, hoje=lambda: DATA_ENSAIO)
    rotas = [
        Mount('/curso/' + caminho,
              app=MaterialEstudo(directory=ROOT / caminho, html=True))
        for caminho in MATERIAIS
    ]
    # A interface já ocupa '/': materiais precisam vir antes desse mount final.
    app.router.routes[-1:-1] = rotas
    return app


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=porta_local, default=8001,
                        help='porta local livre (padrão: 8001)')
    args = parser.parse_args()
    try:
        import uvicorn
        with tempfile.TemporaryDirectory(prefix='mbb-previa-') as pasta:
            banco = Path(pasta) / 'cantina-ensaio.sqlite3'
            app = criar_previa(banco)
            base = f'http://{HOST}:{args.port}'
            print('Ensaio local com dados fictícios; nenhuma publicação.', flush=True)
            print('Data fixa do ensaio: 07/10/2026. Banco temporário:', banco, flush=True)
            print('Após a mensagem de servidor iniciado, abra no mesmo computador:', flush=True)
            print('Aplicação:', base + '/', flush=True)
            print('Percurso:', base + '/curso/laboratorio/percurso-mbb/index.html', flush=True)
            print('Ctrl+C encerra. Salve as evidências antes: o banco será descartado.', flush=True)
            try:
                uvicorn.run(app, host=HOST, port=args.port, log_level='info')
            except KeyboardInterrupt:
                pass
        print('Ensaio encerrado; banco temporário descartado.', flush=True)
        return 0
    except ImportError as erro:
        print('Dependência ausente: ' + str(erro), file=sys.stderr)
        print('Ative o ambiente Python e instale laboratorio/cantina-evolutiva/requirements.txt.',
              file=sys.stderr)
        return 1


if __name__ == '__main__':
    raise SystemExit(main())
