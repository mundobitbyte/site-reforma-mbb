"""Interface de terminal didática: usa o serviço existente, em banco próprio."""
import argparse
import json
import sqlite3
from pathlib import Path

from servico import Cantina, ErroPedido


PASTA = Path(__file__).resolve().parent / 'dados' / 'programacao'


def ler_item(texto):
    """Converter ID:quantidade; a regra de faixa continua no serviço."""
    partes = texto.split(':')
    if len(partes) != 2:
        raise argparse.ArgumentTypeError('Use produto_id:quantidade, por exemplo 1:2.')
    try:
        produto_id = int(partes[0])
        quantidade = int(partes[1])
    except ValueError:
        raise argparse.ArgumentTypeError('Identificador e quantidade precisam ser inteiros.')
    return {'produto_id': produto_id, 'quantidade': quantidade}


def criar_parser():
    parser = argparse.ArgumentParser(description=__doc__)
    comandos = parser.add_subparsers(dest='comando', required=True)
    comandos.add_parser('preparar', help='Criar uma vez o banco didático, sem reiniciar dados.')
    comandos.add_parser('produtos', help='Consultar o cardápio salvo.')
    registrar = comandos.add_parser('registrar', help='Cada execução aceita registra uma nova venda fictícia.')
    registrar.add_argument('--item', type=ler_item, action='append', required=True)
    registrar.add_argument('--cupom')
    consultar = comandos.add_parser('consultar')
    consultar.add_argument('pedido_id', type=int)
    avancar = comandos.add_parser('avancar', help='Avançar só a próxima etapa, conferindo o estado exibido.')
    avancar.add_argument('pedido_id', type=int)
    avancar.add_argument('--estado-esperado', required=True)
    return parser


def main(argv=None, *, pasta=PASTA):
    """pasta é injetada pelos testes; o CLI não aceita caminhos de banco."""
    args = criar_parser().parse_args(argv)
    caminho = Path(pasta) / 'cantina.sqlite3'
    try:
        if args.comando == 'preparar':
            caminho.parent.mkdir(parents=True, exist_ok=True)
            # Reserva exclusiva: uma nova execução nunca reinicia um banco existente.
            with caminho.open('xb'):
                pass
            Cantina(caminho).preparar()
            resultado = {'mensagem': 'Banco didático preparado; os dados são fictícios.'}
        else:
            if not caminho.is_file():
                raise FileNotFoundError('Primeiro execute: python terminal.py preparar')
            cantina = Cantina(caminho)
            if args.comando == 'produtos':
                resultado = cantina.produtos()
            elif args.comando == 'registrar':
                resultado = cantina.registrar(args.item, args.cupom)
            elif args.comando == 'consultar':
                resultado = cantina.consultar(args.pedido_id)
            else:
                pedido = cantina.consultar(args.pedido_id)
                proximo = pedido['proximo_status']
                if proximo is None:
                    raise ErroPedido('O pedido já foi entregue e não pode avançar.', 409)
                resultado = cantina.alterar_status(args.pedido_id, proximo, args.estado_esperado)
        print(json.dumps(resultado, ensure_ascii=False, indent=2))
        return 0
    except FileExistsError:
        print('O banco didático já existe. Consulte os dados; preparar não os reinicia.')
    except ErroPedido as erro:
        print(f'Pedido recusado: {erro}')
    except (OSError, sqlite3.Error) as erro:
        print(f'Não foi possível concluir: {erro}')
    return 1


if __name__ == '__main__':
    raise SystemExit(main())
