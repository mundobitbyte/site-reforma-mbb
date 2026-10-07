from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from backend.app import calcular_subtotal, validar_quantidade


def test_fluxo_normal_quantidade_valida():
    assert validar_quantidade(2) is True


def test_limites_superiores_da_quantidade():
    assert validar_quantidade(1) is True
    assert validar_quantidade(10) is True
    assert validar_quantidade(11) is False


def test_calculo_subtotal_normal():
    assert calcular_subtotal(8.0, 2) == 16.0
