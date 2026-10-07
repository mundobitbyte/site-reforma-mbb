(() => {
  const stages = [
    ['0', 'Será que está pronto?', '00-sera-que-esta-pronto.html', true],
    ['1', 'O que significa qualidade?', '01-o-que-significa-qualidade.html', true],
    ['2', 'Erro, defeito, falha e teste', '02-erro-defeito-falha-teste.html', true],
    ['3', 'O que deveria acontecer?', '03-o-que-deveria-acontecer.html', true],
    ['4', 'Antes de executar', '04-antes-de-executar.html', true],
    ['5', 'Bons valores de teste', '05-bons-valores-de-teste.html', true],
    ['6', 'Regras mais complicadas', '06-regras-mais-complicadas.html', true],
    ['7', 'O que estamos testando?', '07-o-que-estamos-testando.html', true],
    ['8', 'Não dá para testar tudo', '08-nao-da-para-testar-tudo.html', true],
    ['9', 'Planejar e documentar', '09-planejar-e-documentar.html', true],
    ['10', 'Encontramos um defeito', '10-encontramos-um-defeito.html', true],
    ['11', 'Automatizando repetições', '11-automatizando-repeticoes.html', true],
    ['12', 'Teste antes do código', '12-teste-antes-do-codigo.html', true],
    ['13', 'Interface, servidor e banco', '13-interface-servidor-banco.html', true],
    ['14', 'Como o usuário', '14-como-o-usuario.html', true],
    ['15', 'Testes executando sozinhos', '15-testes-executando-sozinhos.html', true],
    ['16', 'Está pronto para entrega?', '16-esta-pronto-para-entrega.html', true],
  ];

  const nav = document.querySelector('#courseNav');
  const current = document.body.dataset.stage ?? '';

  if (nav) {
    const collapse = document.createElement('button');
    collapse.className = 'desktop-nav-collapse';
    collapse.type = 'button';
    collapse.textContent = '← Recolher menu';
    collapse.addEventListener('click', () => {
      const collapsed = document.body.classList.toggle('nav-collapsed');
      collapse.textContent = collapsed ? '→' : '← Recolher menu';
    });
    nav.appendChild(collapse);

    const intro = document.createElement('a');
    intro.className = 'nav-project';
    intro.href = 'index.html';
    intro.innerHTML = '<strong>Cantina Horizonte</strong><span>Um sistema que vai amadurecer junto com os testes.</span>';
    nav.appendChild(intro);

    const title = document.createElement('div');
    title.className = 'nav-group-title';
    title.textContent = 'Etapas';
    nav.appendChild(title);

    stages.forEach(([number, label, href, available]) => {
      const item = document.createElement(available ? 'a' : 'span');
      item.className = `stage-link${number === current ? ' active' : ''}${available ? '' : ' future'}`;
      if (available) item.href = href;
      item.innerHTML = `<span class="stage-number">${number}</span><span>${label}</span>`;
      nav.appendChild(item);
    });
  }

  if (current !== '') {
    const position = Number(current) + 1;
    const total = stages.length;
    const text = document.querySelector('#progressText');
    const bar = document.querySelector('#progressBar');
    if (text) text.textContent = `Etapa ${current} de ${total - 1}`;
    if (bar) bar.style.width = `${(position / total) * 100}%`;

    const currentIndex = stages.findIndex(([number]) => number === current);
    const nextStage = stages[currentIndex + 1];
    const nextSlot = document.querySelector('.stage-footer .disabled');
    if (nextSlot && nextStage?.[3]) {
      const link = document.createElement('a');
      link.className = 'next';
      link.href = nextStage[2];
      link.textContent = `Etapa ${nextStage[0]} →`;
      nextSlot.replaceWith(link);
    }
  }

  const toggle = document.querySelector('#menuToggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a') && window.innerWidth <= 820) {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
