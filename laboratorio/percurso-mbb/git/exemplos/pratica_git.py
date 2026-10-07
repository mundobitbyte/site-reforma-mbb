"""Git real em repositórios temporários. Não acessa GitHub nem o repo de trabalho.

Os documentos representam RF-03 e seu parecer. Alterar o documento não altera
a aplicação. O remoto é uma pasta bare local; nenhum comando usa rede.
"""
import json
import os
from pathlib import Path
import subprocess
import tempfile


def executar():
    registro = []
    with tempfile.TemporaryDirectory(prefix='mbb-git-') as pasta:
        raiz = Path(pasta)
        hooks = raiz / 'hooks-vazios'
        hooks.mkdir()
        env = os.environ.copy()
        env['GIT_CONFIG_NOSYSTEM'] = '1'
        env['GIT_CONFIG_GLOBAL'] = os.devnull
        # Evita usar o índice/repositório de quem invocou o roteiro.
        for chave in list(env):
            if chave in ['GIT_DIR', 'GIT_WORK_TREE', 'GIT_INDEX_FILE', 'GIT_COMMON_DIR',
                         'GIT_OBJECT_DIRECTORY', 'GIT_ALTERNATE_OBJECT_DIRECTORIES'] or chave.startswith('GIT_CONFIG_'):
                env.pop(chave)
        env['GIT_CONFIG_NOSYSTEM'] = '1'
        env['GIT_CONFIG_GLOBAL'] = os.devnull

        def git(p, *args, sucesso=True):
            comando = ['git', '-c', 'user.name=Laboratorio MbB',
                       '-c', 'user.email=laboratorio@example.invalid',
                       '-c', 'commit.gpgsign=false', '-c', 'tag.gpgsign=false',
                       '-c', 'core.hooksPath=' + str(hooks), *args]
            r = subprocess.run(comando, cwd=p, env=env, capture_output=True, text=True, timeout=20)
            registro.append({'comando': list(args), 'codigo': r.returncode,
                             'saida': (r.stdout + r.stderr).replace(str(raiz), '<temporario>').strip()})
            if sucesso and r.returncode:
                raise RuntimeError(registro[-1])
            return r

        a = raiz / 'cantina-a'
        a.mkdir()
        git(a, 'init', '-b', 'base-didatica')
        (a / 'requisitos.md').write_text('RF-03: quantidade inteira de 1 a 10.\n')
        (a / 'evidencias.md').write_text('RQ-02: navegador ainda pendente.\n')
        (a / '.gitignore').write_text('*.sqlite3\n.venv/\n')
        (a / 'ensaio.sqlite3').write_text('arquivo ficticio; nao e um banco')
        git(a, 'check-ignore', 'ensaio.sqlite3')
        git(a, 'status', '--short')
        git(a, 'add', 'requisitos.md', 'evidencias.md', '.gitignore')
        git(a, 'diff', '--cached')
        git(a, 'commit', '-m', 'docs(RF-03): registrar quantidade e limite da evidencia')
        aprovado = git(a, 'rev-parse', 'HEAD').stdout.strip()

        (a / 'requisitos.md').write_text('RF-03: quantidade inteira de 1 a 11.\n')
        assert '+RF-03:' in git(a, 'diff').stdout
        git(a, 'add', 'requisitos.md')
        git(a, 'commit', '-m', 'docs: simular limite errado')
        errado = git(a, 'rev-parse', 'HEAD').stdout.strip()
        assert '1 a 10' in git(a, 'show', aprovado + ':requisitos.md').stdout
        git(a, 'log', '--oneline', '--', 'requisitos.md')
        git(a, 'revert', '--no-edit', errado)
        assert '1 a 10' in (a / 'requisitos.md').read_text()
        assert git(a, 'rev-list', '--count', 'HEAD').stdout.strip() == '3'

        # Uma edição preparada difere de uma edição apenas no arquivo.
        (a / 'evidencias.md').write_text('RQ-02: pendente; prever ensaio a 360 px.\n')
        git(a, 'add', 'evidencias.md')
        git(a, 'restore', '--staged', 'evidencias.md')
        assert git(a, 'diff', '--cached', '--', 'evidencias.md').stdout == ''
        assert git(a, 'diff', '--', 'evidencias.md').stdout
        git(a, 'add', 'evidencias.md')
        git(a, 'commit', '-m', 'docs(RQ-02): planejar ensaio sem afirmar execucao')

        git(a, 'switch', '-c', 'experimento/justificativa')
        (a / 'justificativa.md').write_text('RF-03: conferir 0, 1, 10 e 11; comparar com teste.\n')
        git(a, 'add', 'justificativa.md')
        git(a, 'commit', '-m', 'docs(RF-03): justificar valores de teste')
        git(a, 'switch', 'base-didatica')
        assert not (a / 'justificativa.md').exists()
        git(a, 'merge', '--ff-only', 'experimento/justificativa')
        assert (a / 'justificativa.md').exists()

        # Conflito real entre duas propostas incompatíveis, só nesta cópia temporária.
        git(a, 'switch', '-c', 'experimento/limite12')
        (a / 'requisitos.md').write_text('RF-03: quantidade inteira de 1 a 12.\n')
        git(a, 'add', 'requisitos.md')
        git(a, 'commit', '-m', 'docs: propor outro limite')
        git(a, 'switch', 'base-didatica')
        (a / 'requisitos.md').write_text('RF-03: quantidade inteira de 1 a 10 por produto consolidado.\n')
        git(a, 'add', 'requisitos.md')
        git(a, 'commit', '-m', 'docs(RF-03): explicitar consolidacao')
        conflito = git(a, 'merge', 'experimento/limite12', sucesso=False)
        assert conflito.returncode == 1 and 'CONFLICT' in conflito.stdout
        assert git(a, 'diff', '--name-only', '--diff-filter=U').stdout.strip() == 'requisitos.md'
        (a / 'requisitos.md').write_text('RF-03: quantidade inteira de 1 a 10 por produto consolidado.\n')
        git(a, 'add', 'requisitos.md')
        git(a, 'commit', '-m', 'docs(RF-03): resolver conflito pela regra aprovada')
        assert git(a, 'diff', '--name-only', '--diff-filter=U').stdout == ''

        # Visita isolada ao passado; branch presente continua no mesmo commit.
        presente = git(a, 'rev-parse', 'HEAD').stdout.strip()
        visita = raiz / 'leitura-passado'
        git(a, 'worktree', 'add', '--detach', str(visita), aprovado)
        assert (visita / 'requisitos.md').read_text() == 'RF-03: quantidade inteira de 1 a 10.\n'
        assert git(a, 'rev-parse', 'HEAD').stdout.strip() == presente
        git(a, 'worktree', 'remove', str(visita))

        remoto = raiz / 'remoto-local.git'
        git(raiz, 'init', '--bare', '-b', 'base-didatica', str(remoto))
        git(a, 'remote', 'add', 'origin', str(remoto))
        git(a, 'push', '-u', 'origin', 'base-didatica')
        b = raiz / 'cantina-b'
        git(raiz, 'clone', str(remoto), str(b))
        antigo_b = git(b, 'rev-parse', 'HEAD').stdout.strip()
        (a / 'parecer.md').write_text('Nao liberar como produto final: uso visual ainda pendente.\n')
        git(a, 'add', 'parecer.md')
        git(a, 'commit', '-m', 'docs(QTS): registrar limite do parecer')
        git(a, 'push', 'origin', 'base-didatica')
        assert git(b, 'rev-parse', 'HEAD').stdout.strip() == antigo_b
        git(b, 'fetch', 'origin')
        assert git(b, 'rev-parse', 'HEAD').stdout.strip() == antigo_b
        assert git(b, 'rev-parse', 'origin/base-didatica').stdout.strip() != antigo_b
        git(b, 'diff', 'HEAD..origin/base-didatica', '--', 'parecer.md')
        git(b, 'pull', '--ff-only', 'origin', 'base-didatica')
        assert (b / 'parecer.md').read_text() == (a / 'parecer.md').read_text()
        git(a, 'push', '-u', 'origin', 'experimento/justificativa')
        assert git(a, 'rev-parse', 'HEAD').stdout.strip() == git(b, 'rev-parse', 'HEAD').stdout.strip()
        git(a, 'tag', '-a', 'evidencia-didatica', '-m', 'Ensaio local; nao e release de produto')
        assert git(a, 'status', '--porcelain').stdout == ''
        assert git(b, 'status', '--porcelain').stdout == ''
        assert git(a, 'ls-files', 'ensaio.sqlite3').stdout == ''
        return {'comandos_executados': len(registro), 'conflito_resolvido': True,
                'revert_preservou_historico': True, 'fetch_sem_mudar_HEAD': True,
                'pull_ff_conferido': True, 'worktree_passado_conferida': True,
                'remoto_local': True, 'github_testado': False, 'registro': registro}


if __name__ == '__main__':
    print(json.dumps(executar(), ensure_ascii=False, indent=2))
