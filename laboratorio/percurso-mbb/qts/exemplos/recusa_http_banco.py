"""Observa uma recusa em banco temporário; nunca abre banco de trabalho."""
import json
import tempfile
from comparar_versoes import ambiente, snapshot

with tempfile.TemporaryDirectory(prefix='mbb-recusa-') as pasta:
    with ambiente('evolucao', pasta) as (client, banco):
        antes = snapshot(banco)
        resposta = client.post('/api/pedidos', json={
            'itens': [{'produto_id': 1, 'quantidade': 2}], 'cupom': 'MBB10'})
        depois = snapshot(banco)
        print(json.dumps({'http': resposta.status_code, 'resposta': resposta.json(),
                          'antes': antes, 'depois': depois,
                          'banco_preservado': antes == depois},
                         ensure_ascii=False, indent=2))
        assert resposta.status_code == 400
        assert antes == depois
