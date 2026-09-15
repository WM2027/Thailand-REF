// Category selector + CD / Cross Door market sample data
(function () {
  const categoryOptions = [
    ['', 'All / 全部'],
    ['SBS', 'SBS / Side-by-Side'],
    ['CD', 'CD / Cross Door（4门及以上）'],
    ['TM', 'TM / Top Mount'],
    ['1D', '1D / Single Door']
  ];

  // Verified Thailand retail examples checked 2026-09-15.
  // Price = current promotional/listing price shown by retailer; monthly sales is left blank unless verified.
  const cdProducts = [
    {brand:'Toshiba',model:'GR-RF677WI-PMTH(06)',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:515,netL:515,door:'深灰色',iceMaker:'Yes',officialPrice:27990,promoPrice:23790,monthlySales:'',sellingPoints:'515L / 4门 / Origin Inverter / Surrounding Cooling / Pure Air',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1291901'},
    {brand:'Toshiba',model:'GR-RF690WI-PGTH(67)',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:533,netL:533,door:'白色玻璃',iceMaker:'Yes',officialPrice:74990,promoPrice:60490,monthlySales:'',sellingPoints:'533L / 4门 / Origin Inverter / Multi Air Flow / 自动制冰',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1276521'},
    {brand:'Samsung',model:'RF59CB001AP/ST',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:649,netL:649,door:'白色-米色',iceMaker:'Yes',officialPrice:71990,promoPrice:46990,monthlySales:'',sellingPoints:'649L / 4门 / Auto Ice Maker / SmartThings / Inverter',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1277239'},
    {brand:'LG',model:'GC-B50FPGAM',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:507,netL:507,door:'米色玻璃',iceMaker:'No',officialPrice:40490,promoPrice:34490,monthlySales:'',sellingPoints:'507L / 4门 / Inverter / Multi-Air Flow / Fresh Converter',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1323028'},
    {brand:'LG',model:'GC-B52APGAM',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:511,netL:511,door:'白色玻璃',iceMaker:'No',officialPrice:37490,promoPrice:35490,monthlySales:'',sellingPoints:'511L / 4门 / Inverter / Multi-Air Flow / Fresh Converter',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1323037'},
    {brand:'Haier',model:'HRF-MD539IW(GL)U1',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:522,netL:522,door:'蓝色大理石玻璃',iceMaker:'Yes',officialPrice:39990,promoPrice:31990,monthlySales:'',sellingPoints:'522L / Multi Door / Inverter / HCS / Multi Airflow',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1292852'},
    {brand:'Hitachi',model:'RWB640PTH1 GCK',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:560,netL:560,door:'黑色玻璃',iceMaker:'待核实',officialPrice:41990,promoPrice:30990,monthlySales:'104 sold',sellingPoints:'560L / 4门 / Dual Fan Cooling / Inverter',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1184847'},
    {brand:'Hisense',model:'RQ600P7AB',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:625,netL:625,door:'黑色玻璃',iceMaker:'Yes',officialPrice:69990,promoPrice:59990,monthlySales:'',sellingPoints:'625L / 4门 / Dual-Tech Cooling / Dual Ice Maker / ConnectLife',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1319516'},
    {brand:'Hisense',model:'RQ640P5GB',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:660,netL:660,door:'黑色玻璃',iceMaker:'Yes',officialPrice:44990,promoPrice:37990,monthlySales:'',sellingPoints:'660L / 4门 / Dual-Tech Cooling / My Fresh Choice / Inverter',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1317883'}
  ];

  function resetCategoryOptions() {
    const el = document.getElementById('type');
    if (!el) return;
    const current = el.value;
    el.innerHTML = categoryOptions.map(([v, t]) => `<option value="${v}">${t}</option>`).join('');
    if (categoryOptions.some(([v]) => v === current)) el.value = current;
  }

  // app.js defines products with let; this script runs immediately after app.js,
  // so the same global lexical scope can access it directly.
  try {
    const existing = new Set(products.map(x => x.model));
    products.push(...cdProducts.filter(x => !existing.has(x.model)));
  } catch (e) {
    console.warn('CD data append failed', e);
  }

  resetCategoryOptions();

  if (typeof window.fillFilters === 'function') {
    const originalFillFilters = window.fillFilters;
    window.fillFilters = function () {
      originalFillFilters.apply(this, arguments);
      resetCategoryOptions();
    };
  }

  // Re-render immediately so CD is visible without refresh.
  if (typeof window.fillFilters === 'function' && typeof window.filtered === 'function' && typeof window.render === 'function') {
    window.fillFilters();
    window.render(window.filtered());
  }
})();
