// Category selector + CD / TM market sample data
(function () {
  const categoryOptions = [
    ['', 'All / 全部'],
    ['SBS', 'SBS / Side-by-Side'],
    ['CD', 'CD / Cross Door（4门及以上）'],
    ['TM', 'TM / Top Mount'],
    ['1D', '1D / Single Door']
  ];

  // Thailand retail examples checked 2026-09-16.
  // Price = current promotional/listing price; monthly sales is left blank unless verified.
  const cdProducts = [
    {brand:'Toshiba',model:'GR-RF677WI-PMTH(06)',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:515,netL:515,door:'深灰色',iceMaker:'Yes',officialPrice:27990,promoPrice:23790,monthlySales:'',sellingPoints:'515L / 4门 / Origin Inverter / Surrounding Cooling / Pure Air',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1291901'},
    {brand:'Toshiba',model:'GR-RF690WI-PGTH(67)',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:533,netL:533,door:'白色玻璃',iceMaker:'Yes',officialPrice:74990,promoPrice:60490,monthlySales:'',sellingPoints:'533L / 4门 / Origin Inverter / Multi Air Flow / 自动制冰',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1276521'},
    {brand:'Samsung',model:'RF59CB001AP/ST',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:649,netL:649,door:'白色-米色',iceMaker:'Yes',officialPrice:71990,promoPrice:46990,monthlySales:'',sellingPoints:'649L / 4门 / Auto Ice Maker / SmartThings / Inverter',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1277239'},
    {brand:'LG',model:'GC-B50FPGAM',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:507,netL:507,door:'米色玻璃',iceMaker:'No',officialPrice:40490,promoPrice:34490,monthlySales:'',sellingPoints:'507L / 4门 / Inverter / Multi-Air Flow / Fresh Converter',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1323028'},
    {brand:'LG',model:'GC-B52APGAM',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:511,netL:511,door:'白色玻璃',iceMaker:'No',officialPrice:37490,promoPrice:35490,monthlySales:'',sellingPoints:'511L / 4门 / Inverter / Multi-Air Flow / Fresh Converter',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1323037'},
    {brand:'Haier',model:'HRF-MD539IW(GL)U1',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:522,netL:522,door:'蓝色大理石玻璃',iceMaker:'Yes',officialPrice:39990,promoPrice:31990,monthlySales:'',sellingPoints:'522L / Multi Door / Inverter / HCS / Multi Airflow',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1292852'},
    {brand:'Hitachi',model:'RWB640PTH1 GCK',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:560,netL:560,door:'黑色玻璃',iceMaker:'待核实',officialPrice:41990,promoPrice:30990,monthlySales:'',sellingPoints:'560L / 4门 / Dual Fan Cooling / Inverter',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1184847'},
    {brand:'Hisense',model:'RQ600P7AB',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:625,netL:625,door:'黑色玻璃',iceMaker:'Yes',officialPrice:69990,promoPrice:59990,monthlySales:'',sellingPoints:'625L / 4门 / Dual-Tech Cooling / Dual Ice Maker / ConnectLife',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1319516'},
    {brand:'Hisense',model:'RQ640P5GB',image:'',type:'CD',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:660,netL:660,door:'黑色玻璃',iceMaker:'Yes',officialPrice:44990,promoPrice:37990,monthlySales:'',sellingPoints:'660L / 4门 / Dual-Tech Cooling / My Fresh Choice / Inverter',updated:'2026-09-15',link:'https://www.homepro.co.th/p/1317883'}
  ];

  // TM / Top Mount: current Thailand HomePro examples checked 2026-09-16.
  const tmProducts = [
    {brand:'Toshiba',model:'GR-RT624WE-PMT(06)',image:'',type:'TM',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:463,netL:463,door:'灰色钢板',iceMaker:'Manual Twist',officialPrice:20990,promoPrice:12290,monthlySales:'',sellingPoints:'463L / 16.4Q / Origin Inverter / Air Fall Cooling / Pure BIO',updated:'2026-09-16',link:'https://www.homepro.co.th/p/1168857'},
    {brand:'Toshiba',model:'GR-RT558WE-PMT(52)',image:'',type:'TM',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:410,netL:410,door:'蓝色钢板',iceMaker:'Manual Twist',officialPrice:14990,promoPrice:9490,monthlySales:'',sellingPoints:'约410L / 14.5Q / Inverter / Top Mount',updated:'2026-09-16',link:'https://www.homepro.co.th/'},
    {brand:'Toshiba',model:'GR-RT466WE-PMTH(52)',image:'',type:'TM',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:337,netL:337,door:'深蓝钢板',iceMaker:'Manual Twist',officialPrice:13990,promoPrice:8990,monthlySales:'',sellingPoints:'约337L / 11.9Q / Inverter / Top Mount',updated:'2026-09-16',link:'https://www.homepro.co.th/'},
    {brand:'Samsung',model:'RT47CG6644S9ST',image:'',type:'TM',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:465,netL:465,door:'银色钢板',iceMaker:'Yes',officialPrice:17990,promoPrice:14990,monthlySales:'',sellingPoints:'465L / 16.4Q / Digital Inverter / SmartThings',updated:'2026-09-16',link:'https://www.homepro.co.th/p/1230284'},
    {brand:'Samsung',model:'RT42CG6644S9ST',image:'',type:'TM',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:415,netL:415,door:'银色钢板',iceMaker:'Yes',officialPrice:16490,promoPrice:10990,monthlySales:'',sellingPoints:'415L / 14.7Q / Digital Inverter / SmartThings',updated:'2026-09-16',link:'https://www.homepro.co.th/p/1230257'},
    {brand:'Samsung',model:'RT38CG6684B1ST',image:'',type:'TM',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:385,netL:385,door:'黑色钢板',iceMaker:'Yes',officialPrice:17990,promoPrice:16290,monthlySales:'',sellingPoints:'385L / 13.6Q / Digital Inverter / Smart features',updated:'2026-09-16',link:'https://www.homepro.co.th/p/1233760'},
    {brand:'Samsung',model:'RT38CG6020B1ST',image:'',type:'TM',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:395,netL:395,door:'黑色钢板',iceMaker:'No',officialPrice:14490,promoPrice:9990,monthlySales:'',sellingPoints:'约395L / 13.9Q / Digital Inverter / All Around Cooling',updated:'2026-09-16',link:'https://www.homepro.co.th/p/1233801'},
    {brand:'Samsung',model:'RT25FGRADB1/ST',image:'',type:'TM',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:255,netL:255,door:'Black Matt',iceMaker:'No',officialPrice:10490,promoPrice:8490,monthlySales:'',sellingPoints:'约255L / 9Q / Digital Inverter / All Around Cooling',updated:'2026-09-16',link:'https://www.homepro.co.th/p/1177504'},
    {brand:'Haier',model:'HRF-490IWMGIU1',image:'',type:'TM',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:472,netL:472,door:'蓝色玻璃',iceMaker:'Manual Twist',officialPrice:21990,promoPrice:20490,monthlySales:'',sellingPoints:'472L / 16.7Q / 玻璃门 / Top Mount',updated:'2026-09-16',link:'https://www.homepro.co.th/p/1289043'},
    {brand:'Haier',model:'HRF-BM329MI',image:'',type:'TM',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:324,netL:324,door:'黑色钢板',iceMaker:'No',officialPrice:15990,promoPrice:14990,monthlySales:'',sellingPoints:'324L / 11.4Q / Inverter / Snow Beverage / Deo Fresh',updated:'2026-09-16',link:'https://www.homepro.co.th/p/1248759'},
    {brand:'Haier',model:'HRF-350MNI',image:'',type:'TM',channel:'HomePro',channelType:'家居建材连锁',store:'',onlineOffline:'Online + Offline',grossL:357,netL:357,door:'黑色钢板',iceMaker:'No',officialPrice:10990,promoPrice:10490,monthlySales:'',sellingPoints:'357L / 12.6Q / Top Mount / Multi Air Flow',updated:'2026-09-16',link:'https://www.homepro.co.th/p/1214106'}
  ];

  function resetCategoryOptions() {
    const el = document.getElementById('type');
    if (!el) return;
    const current = el.value;
    el.innerHTML = categoryOptions.map(([v, t]) => `<option value="${v}">${t}</option>`).join('');
    if (categoryOptions.some(([v]) => v === current)) el.value = current;
  }

  try {
    const existing = new Set(products.map(x => x.model));
    products.push(...cdProducts.filter(x => !existing.has(x.model)));
    products.push(...tmProducts.filter(x => !existing.has(x.model)));
  } catch (e) {
    console.warn('CD/TM data append failed', e);
  }

  resetCategoryOptions();

  if (typeof window.fillFilters === 'function') {
    const originalFillFilters = window.fillFilters;
    window.fillFilters = function () {
      originalFillFilters.apply(this, arguments);
      resetCategoryOptions();
    };
  }

  if (typeof window.fillFilters === 'function' && typeof window.filtered === 'function' && typeof window.render === 'function') {
    window.fillFilters();
    window.render(window.filtered());
  }
})();
