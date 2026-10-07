from pathlib import Path
import sys

import pytest
from fastapi.testclient import TestClient

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

import backend.app as appmod


@pytest.fixture
def client(tmp_path, monkeypatch):
    """Entrega um cliente da API usando um banco SQLite temporário e isolado."""
    db_teste = tmp_path / "cantina_test.db"
    monkeypatch.setattr(appmod, "DB_PATH", db_teste)
    appmod.preparar_banco()

    with TestClient(appmod.app) as cliente:
        yield cliente
