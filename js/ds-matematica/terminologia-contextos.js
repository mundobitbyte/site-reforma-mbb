(() => {
  'use strict';
  if (!Array.isArray(window.DS_MATH_LESSONS)) return;

  const substitutions = [
    ['Em DS e tecnologia', 'Na tecnologia e na programação'],
    ['em DS e tecnologia', 'na tecnologia e na programação'],
    ['DS e tecnologia', 'tecnologia e programação'],
    ['no próprio curso de DS', 'na tecnologia e na programação'],
    ['No próprio curso de DS', 'Na tecnologia e na programação'],
    ['no curso de DS', 'na área de tecnologia'],
    ['No curso de DS', 'Na área de tecnologia']
  ];

  window.DS_MATH_LESSONS.forEach(lesson => {
    if (typeof lesson.content === 'string') {
      substitutions.forEach(([from, to]) => {
        lesson.content = lesson.content.split(from).join(to);
      });
    }
    if (typeof lesson.objective === 'string') {
      substitutions.forEach(([from, to]) => {
        lesson.objective = lesson.objective.split(from).join(to);
      });
    }
  });
})();
