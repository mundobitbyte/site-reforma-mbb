"""Verificação estrutural somente leitura. Não usa navegador, rede ou banco.
Execute da raiz: python laboratorio/percurso-mbb/verificar_percurso.py
Não substitui testes de execução/uso. Saída JSON; código 1 indica erro.
"""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import hashlib
import json
import re

ROOT=Path(__file__).resolve().parents[2]
BASE=ROOT/'laboratorio/percurso-mbb'
VOID={'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids=set(); self.duplicates=[]; self.links=[]; self.copies=[]
        self.codes={}; self.codeid=None; self.stack=[]; self.errors=[]; self.h1=0; self.lang=None
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='html': self.lang=a.get('lang')
        if tag=='h1':self.h1+=1
        if 'id' in a:
            if a['id'] in self.ids:self.duplicates.append(a['id'])
            self.ids.add(a['id'])
        if tag=='pre' and 'id' in a:
            self.codeid=a['id']; self.codes[self.codeid]=''
        if 'data-copy' in a:
            self.copies.append(a['data-copy'])
            if tag!='button' or a.get('type')!='button':self.errors.append('copy button type')
        for attr in ['href','src']:
            if attr in a:self.links.append((tag,attr,a[attr]))
        if tag not in VOID:self.stack.append(tag)
    def handle_startendtag(self,tag,attrs):
        self.handle_starttag(tag,attrs)
        if tag not in VOID:self.handle_endtag(tag)
    def handle_endtag(self,tag):
        if tag=='pre':self.codeid=None
        if tag in VOID:return
        if not self.stack or self.stack[-1]!=tag:self.errors.append('closing '+tag)
        else:self.stack.pop()
    def handle_data(self,data):
        if self.codeid is not None:self.codes[self.codeid]+=data
pages={}
for path in BASE.rglob('*.html'):
    parser=P();parser.feed(path.read_text(encoding="utf-8"));pages[path.resolve()]=parser
ids_python=set()
for p in (ROOT/'js/python').glob('trilha-*.js'):
    ids_python.update(re.findall(r"\bid\s*:\s*['\"]([^'\"]+)['\"]",p.read_text(encoding="utf-8")))
assert len(ids_python)==40
ids_api=set()
for p in (ROOT/'js/backend-fastapi').glob('bloco-*.js'):
    ids_api.update(re.findall(r"id:\s*'(capitulo-\d+)'",p.read_text(encoding="utf-8")))
assert len(ids_api)==45
git_inventory={}
for filename,nomes in [('git-conteudo-canonico.js',{'git':'gitSteps','github':'githubSteps'}),('git-exercicios-canonico.js',{'exercicios':'exerciseSteps'}),('git-comandos-canonico.js',{'comandos':'commandSteps'})]:
    source=(ROOT/'js'/filename).read_text(encoding="utf-8")
    for group,name in nomes.items():
        tail=source.split('const '+name+' =',1)[1].lstrip()
        git_inventory[group],_=json.JSONDecoder().raw_decode(tail)
ids_git={group+'-'+str(e['id']) for group,es in git_inventory.items() for e in es}
assert len(ids_git)==57
errors=[]; refs=0;copy=0
for path,p in pages.items():
    if p.lang!='pt-BR' or p.h1!=1 or p.stack or p.errors or p.duplicates:
        errors.append((str(path.relative_to(ROOT)),p.lang,p.h1,p.stack,p.errors,p.duplicates))
    for target in p.copies:
        copy+=1
        if target not in p.codes:errors.append((str(path),'copy missing',target))
    if p.copies and 'copy-status' not in p.ids:errors.append((str(path),'copy status absent'))
    for tag,attr,url in p.links:
        u=urlsplit(url)
        if u.scheme or u.netloc:
            if attr=='src' or tag=='link':errors.append((str(path),'external resource',url))
            continue
        refs+=1
        target=(path.parent/unquote(u.path)).resolve() if u.path else path
        if not target.exists():errors.append((str(path),'missing',url));continue
        if u.fragment and target.suffix=='.html':
            if target==ROOT/'pages/python.html' and u.fragment.startswith('aprender/'):
                if u.fragment.split('/',1)[1] not in ids_python:errors.append((str(path),'python lesson absent',url))
            elif target==ROOT/'pages/git.html':
                if u.fragment not in ids_git:errors.append((str(path),'git lesson absent',url))
            elif target==ROOT/'pages/backend-fastapi.html':
                if u.fragment not in ids_api:errors.append((str(path),'api lesson absent',url))
            else:
                if target not in pages:
                    q=P();q.feed(target.read_text(encoding="utf-8")); valid=q.ids
                else:valid=pages[target].ids
                if unquote(u.fragment) not in valid:errors.append((str(path),'fragment missing',url))
codes=[value for p in pages.values() for value in p.codes.values()]
canonical=list((BASE/'banco-de-dados/sql').glob('*.sql'))+list((BASE/'programacao/exemplos').glob('*.py'))+list((BASE/'programacao/visualg').glob('*.alg'))
canonical += [p for p in (BASE/'web-api/exemplos').rglob('*') if p.is_file() and p.suffix in ['.html','.css','.js','.mjs']]
canonical += [ROOT/'laboratorio/cantina-evolutiva'/n for n in ['frontend/index.html','frontend/styles.css','frontend/app.js','app.py']]
canonical += list((BASE/'qts/exemplos').glob('*.py')) + list((BASE/'git/exemplos').glob('*.py'))
for f in canonical:
    if f.read_text(encoding="utf-8") not in codes:errors.append((str(f.relative_to(ROOT)),'canonical code absent'))
prog=json.loads((BASE/'matriz-programacao.json').read_text(encoding="utf-8")); acervo=json.loads((BASE/'matriz-python-acervo.json').read_text(encoding="utf-8"))
assert len(prog)==15 and len(acervo)==40 and set(e['id'] for e in acervo)==ids_python
web=json.loads((BASE/'matriz-web-api.json').read_text(encoding="utf-8"))
web_acervo=json.loads((BASE/'matriz-web-acervo.json').read_text(encoding="utf-8"))
api_acervo=json.loads((BASE/'matriz-api-acervo.json').read_text(encoding="utf-8"))
assert len(web)==13 and len(web_acervo)==23 and len(api_acervo)==45
assert set(e['origem'].split('#')[1] for e in api_acervo)==ids_api
for e in prog+acervo+web:
    if e['destino'] and not (ROOT/e['destino']).is_file():errors.append(('matrix destination',e['destino']))
qts=json.loads((BASE/'matriz-qts.json').read_text(encoding="utf-8")); git=json.loads((BASE/'matriz-git.json').read_text(encoding="utf-8")); ga=json.loads((BASE/'matriz-git-acervo.json').read_text(encoding="utf-8"))
assert len(qts)==17 and len(git)==10 and len(ga)==57
assert {e['origem'].split('#')[1] for e in ga}==ids_git
for e in qts+git:
    assert (ROOT/e['destino']).is_file()
import ast
for e in json.loads((BASE/'qts/matriz-casos.json').read_text(encoding="utf-8")):
    if e['arquivo']:
        ns=ast.parse((ROOT/e['arquivo']).read_text(encoding="utf-8"))
        assert e['funcao'] in {n.name for n in ns.body if isinstance(n,ast.FunctionDef)}
protected={
'pages/bancodedados.html':'f46eee0470402bc9462c1179fb5fb3fa75099dcc6a442af1dcc572556cbb5f04',
'assets/seguranca-dados/mysql-general-log-lab.sql':'b68631aad643d6a2400dd3dc4ac490a332b337ebc19431c932b34f9502ce6352',
}
for filename,expected in protected.items():
    assert hashlib.sha256((ROOT/filename).read_bytes()).hexdigest()==expected
result={'etapas_qts':17,'etapas_git':10,'git_acervo':57,'testes_python_reexecutados':False,'github_simulado':False,'paginas_html':len(pages),'paginas_programacao':len(list((BASE/'programacao').glob('*.html'))),'paginas_web_curriculares':len(list((BASE/'web-api').glob('*.html'))),'paginas_web_recortes':len(list((BASE/'web-api/exemplos').rglob('*.html'))),'etapas_web':13,'web_acervo':23,'api_acervo':45,'referencias_locais':refs,'botoes_copiar':copy,'codigo_canonico':len(canonical),'etapas_programacao':len(prog),'temas_python_mapeados':len(acervo),'erros':errors,'browser_tested':False,'visualg_executado':False,'hashes_protegidos':protected}
analysis=json.loads((BASE/'matriz-analise.json').read_text(encoding="utf-8"))
bd_matrix=json.loads((BASE/'matriz-bd.json').read_text(encoding="utf-8"))
# O capítulo 99 é caderno de exercícios, não um 12º capítulo de ensino.
bd=[e for e in bd_matrix if e['capitulo'] != '99']
assert len(analysis)==15 and len(bd)==11
progress=json.loads((ROOT/'docs/reforma/progresso-subetapas.json').read_text(encoding="utf-8"))
items=[e for m in progress['macroetapas'] for e in m['subetapas']]
assert len(items)==len({e['id'] for e in items})==31
assert set(e['situacao'] for e in items)<={'concluida','pendente','bloqueada'}
assert progress['resumo']['concluidas']==sum(e['situacao']=='concluida' for e in items)
assert progress['resumo']['restantes']==sum(e['situacao']!='concluida' for e in items)
assert progress['resumo']['total_subetapas']==len(items)
assert progress['resumo']['total_etapas_ensino']==len(analysis)+len(bd)+len(prog)+len(web)+len(qts)+len(git)==81
known={e['id'] for e in items}|set(progress['bloqueios'])
for e in items:
    assert set(e['depende_de'])<=known
    for f in e['evidencias']:
        if not (ROOT/f).is_file():errors.append((e['id'],'evidence missing',f))
result['acompanhamento']=progress['resumo']
result['posicao_atual']=progress['posicao_atual']
print(json.dumps(result,ensure_ascii=False))
raise SystemExit(1 if errors else 0)
