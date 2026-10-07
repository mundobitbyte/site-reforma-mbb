(() => {
  'use strict';
  if (typeof pensarSteps === 'undefined') return;

  const step42 = pensarSteps.find(item => item.id === 42);
  if (step42 && typeof step42.content === 'string') {
    step42.content = step42.content.replace(
      /\s*<div class="flowchart-step-chain">[\s\S]*?<\/div>\s*/,
      '\n      '
    );
  }

  const step44 = pensarSteps.find(item => item.id === 44);
  if (step44 && typeof step44.content === 'string') {
    step44.content = step44.content
      .replace('viewBox="0 0 700 1010"', 'viewBox="0 0 760 1060"')
      .replace(
        '<path class="arrow" d="M420 566H451"></path><polygon points="460,566 448,559 448,573" fill="#1e3a8a"></polygon>',
        '<path class="arrow" d="M420 566H481"></path><polygon points="490,566 478,559 478,573" fill="#1e3a8a"></polygon>'
      )
      .replace(
        '<text class="branch-label" x="440" y="549" text-anchor="middle">NÃO</text>',
        '<text class="branch-label" x="455" y="535" text-anchor="middle">NÃO</text>'
      )
      .replace(
        '<rect class="node process" x="460" y="539" width="220" height="54" rx="2"></rect><text class="node-title" x="570" y="572" text-anchor="middle">totalFinal = total</text>',
        '<rect class="node process" x="490" y="539" width="220" height="54" rx="2"></rect><text class="node-title" x="600" y="572" text-anchor="middle">totalFinal = total</text>'
      )
      .replace(
        '<path class="arrow" d="M570 593V840H327"></path>',
        '<path class="arrow" d="M600 593V915H469"></path>'
      )
      .replace(
        '<polygon points="318,840 330,833 330,847" fill="#1e3a8a"></polygon>',
        '<polygon points="460,915 472,908 472,922" fill="#1e3a8a"></polygon>'
      )
      .replace(
        '<path class="arrow" d="M300 791V809"></path><polygon points="300,818 293,806 307,806" fill="#1e3a8a"></polygon>',
        ''
      )
      .replace(
        '<circle class="node connector" cx="300" cy="840" r="18"></circle><text class="node-title" x="300" y="846" text-anchor="middle">C</text>',
        ''
      )
      .replace(
        '<path class="arrow" d="M300 858V876"></path><polygon points="300,885 293,873 307,873" fill="#1e3a8a"></polygon>',
        '<path class="arrow" d="M300 791V876"></path><polygon points="300,885 293,873 307,873" fill="#1e3a8a"></polygon>'
      );
  }

  if (typeof stepGroups !== 'undefined') stepGroups.pensar = pensarSteps;
  if (typeof renderMenu === 'function' && typeof renderStep === 'function') {
    renderMenu();
    renderStep();
  }
})();
