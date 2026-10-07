from random import Random
import unittest

from motor import ALTURA, LARGURA, META, TAMANHO_JOGADOR, Estado, atualizar, mover


class TestMotor(unittest.TestCase):
    def test_movimento_respeita_limites(self) -> None:
        estado = Estado(jogador_x=0, jogador_y=70)
        mover(estado, -1, -1, 10)
        self.assertEqual((estado.jogador_x, estado.jogador_y), (0, 70))

        mover(estado, 1, 1, 10)
        self.assertEqual(estado.jogador_x, LARGURA - TAMANHO_JOGADOR)
        self.assertEqual(estado.jogador_y, ALTURA - TAMANHO_JOGADOR)

    def test_colisao_soma_ponto_e_move_alerta(self) -> None:
        estado = Estado(jogador_x=100, jogador_y=100, alerta_x=110, alerta_y=110)
        atualizar(estado, 0.5, Random(7))
        self.assertEqual(estado.pontos, 1)
        self.assertNotEqual((estado.alerta_x, estado.alerta_y), (110, 110))

    def test_tempo_nao_fica_negativo(self) -> None:
        estado = Estado(segundos=0.1, alerta_x=700, alerta_y=300)
        atualizar(estado, 1, Random(1))
        self.assertEqual(estado.segundos, 0)
        self.assertTrue(estado.terminou)

    def test_meta_define_vitoria(self) -> None:
        estado = Estado(pontos=META)
        self.assertTrue(estado.terminou)
        self.assertTrue(estado.venceu)


if __name__ == "__main__":
    unittest.main()
