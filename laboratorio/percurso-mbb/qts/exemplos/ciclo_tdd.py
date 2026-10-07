"""Recorte didático de RF-03. Não modifica a v1 ou o serviço integrado.

RED deve falhar por uma regra incompleta, não por importação ou ambiente.
Não afirma que a aplicação inteira tenha sido desenvolvida com TDD.
"""
import json


def regra_red(quantidade):
    return quantidade <= 10


def regra_green(quantidade):
    return type(quantidade) is int and quantidade >= 1 and quantidade <= 10


def regra_refactor(quantidade):
    return type(quantidade) is int and 1 <= quantidade <= 10


CASOS = [(0, False), (-1, False), (1, True), (2, True), (10, True),
         (11, False), (True, False), (1.5, False)]


def executar():
    fases = []
    for nome, regra in [('RED', regra_red), ('GREEN', regra_green), ('REFACTOR', regra_refactor)]:
        falhas = [repr(q) for q, esperado in CASOS if regra(q) != esperado]
        fases.append({'fase': nome, 'amostras': len(CASOS), 'falhas': falhas})
    assert fases[0]['falhas'] == ['0', '-1', 'True', '1.5']
    assert not fases[1]['falhas'] and not fases[2]['falhas']
    return {'fases': fases, 'aplicacao_modificada': False}


if __name__ == '__main__':
    print(json.dumps(executar(), ensure_ascii=False, indent=2))
