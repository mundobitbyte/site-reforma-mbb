"""Integração local da home, percurso e API; não renderiza navegador."""
from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import urljoin, urlsplit

import pytest
from fastapi.testclient import TestClient

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from previa_local import ROOT, criar_previa


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.recursos = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'a':
            self.links.append(attrs.get('href', ''))
        if tag == 'script' and 'src' in attrs:
            self.recursos.append(attrs['src'])
        if tag == 'link' and attrs.get('rel') == 'stylesheet':
            self.recursos.append(attrs['href'])


@pytest.fixture
def previa(tmp_path):
    with TestClient(criar_previa(tmp_path / 'navegacao.sqlite3')) as client:
        yield client


def test_home_real_e_recursos_necessarios(previa):
    resposta = previa.get('/curso/index.html')
    assert resposta.status_code == 200
    assert resposta.content == (ROOT / 'index.html').read_bytes()
    pagina = Links()
    pagina.feed(resposta.text)
    for recurso in pagina.recursos:
        url = urljoin('/curso/index.html', recurso)
        atual = previa.get(url)
        assert atual.status_code == 200, url
        arquivo = urlsplit(url).path.removeprefix('/curso/')
        assert atual.content == (ROOT / arquivo).read_bytes(), url
    # Recursos acrescentados pelo script público de busca.
    for recurso in ['js/mbb-visualizador-site.js', 'meu-mbb/visitas-diretas.js', 'meu-mbb/visitas-diretas.json']:
        assert previa.get('/curso/' + recurso).status_code == 200
    config = previa.get('/curso/meu-mbb/firebase-config.js').text
    assert 'window.MBB_LAB_MODE = true' in config
    assert 'Object.freeze({})' in config


def test_home_percurso_seis_disciplinas_e_volta(previa):
    home = Links()
    home.feed(previa.get('/curso/index.html').text)
    novos = set(href for href in home.links if href.startswith('laboratorio/percurso-mbb/'))
    assert len(novos) == 7
    for href in novos:
        url = urljoin('/curso/index.html', href)
        resposta = previa.get(url)
        assert resposta.status_code == 200, url
        pagina = Links()
        pagina.feed(resposta.text)
        retorno = '../../index.html#areas' if href == 'laboratorio/percurso-mbb/index.html' else '../index.html'
        assert retorno in pagina.links
        assert previa.get(urljoin(url, retorno)).status_code == 200


def test_retornar_aplicacao_preserva_raiz_da_api(previa):
    url = '/curso/laboratorio/percurso-mbb/index.html'
    pagina = Links()
    pagina.feed(previa.get(url).text)
    retorno = '../cantina-evolutiva/frontend/index.html'
    assert retorno in pagina.links
    assert previa.get(urljoin(url, retorno)).status_code == 200
    assert previa.get('/').content == (ROOT / 'laboratorio/cantina-evolutiva/frontend/index.html').read_bytes()
    assert previa.get('/api/produtos').status_code == 200
    assert previa.get('/api/produtos').json()[0]['nome'] == 'Água'


@pytest.mark.parametrize('caminho', [
    '/curso/meu-mbb/entrar.html', '/curso/meu-mbb/index.html',
    '/curso/meu-mbb/conta-segredo.js', '/curso/.git/config',
    '/curso/laboratorio/cantina-evolutiva/dados/pedido.sqlite3',
    '/curso/css/..%2Findex.html',
])
def test_home_nao_amplia_exposicao_de_arquivos(previa, caminho):
    assert previa.get(caminho).status_code == 404


def test_home_nao_aceita_escrita(previa):
    antes = (ROOT / 'index.html').read_bytes()
    assert previa.post('/curso/index.html', content='troca').status_code == 405
    assert (ROOT / 'index.html').read_bytes() == antes
