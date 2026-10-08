import json
from pathlib import Path

from regras import subtotal_item


pasta = Path(__file__).resolve().parent / "dados"
pasta.mkdir(exist_ok=True)
caminho = pasta / "pedido-exemplo.json"
resumo = {
    "simulacao": True,
    "produto_id": 1,
    "quantidade": 2,
    "subtotal_centavos": subtotal_item(300, 2),
}
try:
    with caminho.open("x", encoding="utf-8") as arquivo:
        json.dump(resumo, arquivo, ensure_ascii=False, indent=2)
except FileExistsError:
    print("Arquivo já existe; a simulação anterior foi preservada.")

with caminho.open("r", encoding="utf-8") as arquivo:
    recuperado = json.load(arquivo)
print("Recuperado em centavos:", recuperado["subtotal_centavos"])
