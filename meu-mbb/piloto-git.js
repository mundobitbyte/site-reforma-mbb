(async function () {
  'use strict';
  const core = window.MBBCatalogo, conta = window.MBBMeuConta;
  let catalogo;
  try {
    const resposta = await fetch('../meu-mbb/catalogo.json');
    if (!resposta.ok) return;
    catalogo = core.validar(await resposta.json());
  } catch (_) { return; } // A navegação pública do módulo segue independente.

  let atual = null, ultimaVisita = '', painel = null;
  const unidadeAtual = () => {
    const secao = document.querySelector('#moduleMenu .module-btn.active')?.dataset.module;
    const etapa = document.querySelector('#menu .nav-btn.active')?.id.match(/-(\d+)$/)?.[1];
    return catalogo.unidades.find(unidade => unidade.localizacao_atual === `pages/git.html#${secao}-${etapa}`) || null;
  };
  function montar() {
    const li = document.createElement('div'); li.className = 'mbb-piloto';
    const favorito = document.createElement('button'); favorito.type = 'button'; favorito.textContent = '☆ Favorito';
    const concluir = document.createElement('button'); concluir.type = 'button'; concluir.textContent = 'Marcar como concluído';
    const area = document.createElement('textarea'); area.placeholder = 'Nova anotação privada (até 2.000 caracteres)'; area.maxLength = 2000; area.rows = 2;
    const salvar = document.createElement('button'); salvar.type = 'button'; salvar.textContent = 'Adicionar anotação';
    const cancelar = document.createElement('button'); cancelar.type = 'button'; cancelar.textContent = 'Cancelar edição'; cancelar.hidden = true;
    const listaNotas = document.createElement('div'); listaNotas.className = 'mbb-lista-notas';
    const aviso = document.createElement('span'); aviso.setAttribute('role', 'status');
    let favoritoAtivo = false, concluidoAtivo = false, notas = [], edicao = null;
    li.append(favorito, concluir, area, salvar, cancelar, listaNotas, aviso);
    function mostrarNotas() {
      listaNotas.replaceChildren();
      const resumo = document.createElement('p'); resumo.textContent = `${notas.length} de 10 anotações nesta etapa.`;
      listaNotas.append(resumo);
      notas.forEach((texto, indice) => {
        const linha = document.createElement('div'); linha.className = 'mbb-nota';
        const corpo = document.createElement('p'); corpo.textContent = texto;
        const editar = document.createElement('button'); editar.type = 'button'; editar.textContent = 'Editar';
        editar.addEventListener('click', () => { edicao = indice; area.value = texto; salvar.textContent = 'Salvar alteração'; cancelar.hidden = false; });
        const remover = document.createElement('button'); remover.type = 'button'; remover.textContent = 'Apagar';
        remover.addEventListener('click', async () => {
          if (!confirm('Apagar esta anotação?')) return;
          const unidade = atual;
          try { await conta.removerNota(unidade, indice); if (atual !== unidade) return;
            notas = conta.notasDoRegistro(await conta.obter(unidade)); cancelar.click(); aviso.textContent = 'Anotação apagada.';
          } catch (_) { aviso.textContent = 'Não foi possível apagar esta anotação.'; }
        });
        linha.append(corpo, editar, remover); listaNotas.append(linha);
      });
      salvar.disabled = edicao === null && notas.length >= 10;
    }
    cancelar.addEventListener('click', () => {
      edicao = null; area.value = ''; salvar.textContent = 'Adicionar anotação'; cancelar.hidden = true; mostrarNotas();
    });
    const acao = async campos => {
      if (!atual) return;
      aviso.textContent = 'Salvando…';
      try { await conta.salvar(atual, campos); aviso.textContent = 'Salvo no Meu MbB.';
        if ('favorito' in campos) { favoritoAtivo = campos.favorito; favorito.textContent = favoritoAtivo ? '★ Favorito' : '☆ Favorito'; }
        if ('concluido' in campos) { concluidoAtivo = campos.concluido; concluir.textContent = concluidoAtivo ? 'Concluído ✓' : 'Marcar como concluído'; }
      }
      catch (_) { aviso.textContent = 'Não foi possível salvar agora. Continue estudando normalmente.'; }
    };
    favorito.addEventListener('click', () => acao({ favorito: !favoritoAtivo }));
    concluir.addEventListener('click', () => acao({ concluido: !concluidoAtivo }));
    salvar.addEventListener('click', async () => {
      const unidade = atual;
      if (!unidade) return;
      try { await conta.alterarNota(unidade, area.value, edicao); if (atual !== unidade) return;
        notas = conta.notasDoRegistro(await conta.obter(unidade)); cancelar.click(); aviso.textContent = 'Anotação salva no Meu MbB.';
      } catch (erro) { aviso.textContent = erro.message || 'Não foi possível salvar esta anotação.'; }
    });
    li.atualizar = async unidade => {
      aviso.textContent = '';
      try {
        const registro = await conta.obter(unidade);
        if (atual !== unidade) return;
        const estado = registro;
        favoritoAtivo = Boolean(estado.favorito); concluidoAtivo = Boolean(estado.concluido);
        favorito.textContent = favoritoAtivo ? '★ Favorito' : '☆ Favorito';
        concluir.textContent = concluidoAtivo ? 'Concluído ✓' : 'Marcar como concluído';
        notas = conta.notasDoRegistro(estado); cancelar.click();
      } catch (_) { aviso.textContent = 'Dados pessoais indisponíveis. O conteúdo público segue acessível.'; }
    };
    painel = li;
  }
  async function atualizar() {
    const unidade = unidadeAtual();
    if (!unidade || !conta.atual()?.emailVerified) return;
    atual = unidade;
    if (!painel) montar();
    const aula = document.getElementById('lesson');
    if (aula && painel.parentElement !== aula) aula.prepend(painel);
    painel.atualizar(unidade);
    if (ultimaVisita !== unidade.conteudo_id) {
      ultimaVisita = unidade.conteudo_id;
      try { await conta.visitar(unidade); }
      catch (_) { /* O estudo público não depende deste registro. */ }
    }
  }
  // O módulo informa qual etapa exibiu; este ouvinte não controla sua navegação.
  window.addEventListener('mbb:git-etapa', atualizar);
  try { await conta.iniciar(); atualizar(); }
  catch (_) { /* Falha de Firebase não interfere no módulo Git. */ }
}());
