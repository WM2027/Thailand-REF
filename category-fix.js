// Keep the category selector stable even when app.js rebuilds filters from current data.
(function () {
  const categoryOptions = [
    ['', 'All / 全部'],
    ['SBS', 'SBS / Side-by-Side'],
    ['CD', 'CD / Cross Door（4门及以上）'],
    ['TM', 'TM / Top Mount'],
    ['1D', '1D / Single Door']
  ];

  function resetCategoryOptions() {
    const el = document.getElementById('type');
    if (!el) return;
    const current = el.value;
    el.innerHTML = categoryOptions.map(([v, t]) => `<option value="${v}">${t}</option>`).join('');
    if (categoryOptions.some(([v]) => v === current)) el.value = current;
  }

  resetCategoryOptions();

  if (typeof window.fillFilters === 'function') {
    const originalFillFilters = window.fillFilters;
    window.fillFilters = function () {
      originalFillFilters.apply(this, arguments);
      resetCategoryOptions();
    };
  }
})();
