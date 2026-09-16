(function(){
  const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const num = v => { const n = Number(v); return Number.isFinite(n) ? n : null; };
  const fmt = v => v === '' || v == null ? '—' : '฿ ' + Number(v).toLocaleString('en-US');
  const cap = p => num(p.netL) ?? num(p.grossL);
  function getData(){ try { return products.filter(p => String(p.type).toUpperCase() === 'SBS'); } catch(e){ return []; } }
  function renderSBS(){
    const type = document.getElementById('type'), capacity = document.getElementById('capacity');
    if (!type || !capacity || type.value !== 'SBS' || capacity.value !== '600+') return;
    const brand = document.getElementById('brand')?.value || '', channel = document.getElementById('channel')?.value || '', price = document.getElementById('price')?.value || '', search = (document.getElementById('search')?.value || '').toLowerCase().trim();
    let rows = getData().filter(p => {
      const c = cap(p); if (c == null || c < 600) return false;
      if (brand && p.brand !== brand) return false; if (channel && p.channel !== channel) return false;
      if (search && !(String(p.model)+' '+String(p.brand)+' '+String(p.sellingPoints||'')).toLowerCase().includes(search)) return false;
      const pr = num(p.promoPrice); if (price === '0-29999' && !(pr != null && pr < 30000)) return false; if (price === '30000-49999' && !(pr != null && pr >= 30000 && pr < 50000)) return false; if (price === '50000-79999' && !(pr != null && pr >= 50000 && pr < 80000)) return false; if (price === '80000-999999' && !(pr != null && pr >= 80000)) return false;
      return true;
    });
    rows.sort((a,b) => (num(a.promoPrice) ?? 999999999) - (num(b.promoPrice) ?? 999999999)); const shown = rows.slice(0,24);
    const stats=document.getElementById('stats'); if(stats){ const brands=[...new Set(shown.map(p=>p.brand))]; stats.innerHTML=brands.map(b=>{const bp=shown.filter(p=>p.brand===b).map(p=>num(p.promoPrice)).filter(v=>v!=null);const avg=bp.length?bp.reduce((a,x)=>a+x,0)/bp.length:null;return `<div class="statCard"><div class="statLabel">${esc(b)} / 均价</div><div class="statValue">${avg==null?'—':fmt(Math.round(avg))}</div><div class="statSub">${bp.length} SKU</div></div>`}).join('')+`<div class="statCard"><div class="statLabel">SBS 600L+</div><div class="statValue">${shown.length}</div><div class="statSub">SKU</div></div>`; }
    const title=document.getElementById('mapTitle'); if(title) title.innerHTML='SBS / Side-by-Side　600L+　<small style="font-size:14px;color:#55707d">容量段（净容积）</small>';
    const wrap=document.getElementById('mapWrap'); if(!wrap)return; if(!shown.length){wrap.innerHTML='<div style="padding:50px;text-align:center;font-size:18px;color:#777">SBS 600L+ 暂无可显示数据</div>';return;}
    wrap.innerHTML=`<div class="sbsFixGrid">${shown.map(p=>{const image=p.image?`<img src="${esc(p.image)}" onerror="this.style.display='none'" alt="${esc(p.model)}">`:'<div class="sbsNoImage">REF</div>';const c=cap(p);return `<article class="sbsFixCard"><div class="sbsFixImg">${image}</div><div class="sbsFixInfo"><div class="sbsFixBrand">${esc(p.brand)}</div><div class="sbsFixModel">${esc(p.model)}</div><div class="sbsFixSpec"><b>${c?Math.round(c)+'L':'待核实'}</b>　${esc(p.door||'')}<br>制冰：${esc(p.iceMaker||'待核实')}<br>${esc(p.sellingPoints||'')}</div><div class="sbsFixBottom"><span class="sbsFixPrice">${fmt(p.promoPrice)}</span>${p.officialPrice?`<del>${fmt(p.officialPrice)}</del>`:''}</div><div class="sbsFixMeta">${esc(p.channel||'—')}　${p.monthlySales?'月销 '+esc(p.monthlySales):'月销待核实'}<a href="${esc(p.link||'#')}" target="_blank" rel="noopener">查看详情</a></div></div></article>`}).join('')}</div>`;
  }
  function install(){
    const type=document.getElementById('type'), capacity=document.getElementById('capacity'); if(!type||!capacity)return setTimeout(install,200);
    const style=document.createElement('style'); style.textContent=`.sbsFixGrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.sbsFixCard{background:#fff;border:1px solid #dbe6e8;border-radius:14px;padding:12px;display:flex;min-height:220px;box-shadow:0 2px 8px rgba(0,0,0,.04)}.sbsFixImg{width:112px;min-width:112px;height:180px;display:flex;align-items:center;justify-content:center;background:#f7fafb;border-radius:10px;overflow:hidden}.sbsFixImg img{width:100%;height:100%;object-fit:contain}.sbsNoImage{font-weight:800;color:#0a9295;font-size:24px}.sbsFixInfo{padding-left:12px;min-width:0}.sbsFixBrand{font-weight:800;color:#087f83;font-size:16px}.sbsFixModel{font-size:13px;font-weight:700;color:#334e5a;word-break:break-all;margin:5px 0 10px}.sbsFixSpec{font-size:12px;line-height:1.65;color:#657b84}.sbsFixBottom{margin-top:10px;white-space:nowrap}.sbsFixPrice{color:#e52525;font-size:19px;font-weight:800;margin-right:8px}.sbsFixBottom del{color:#91a2a8;font-size:11px}.sbsFixMeta{font-size:11px;color:#56717a;margin-top:8px;display:flex;gap:6px;align-items:center;flex-wrap:wrap}.sbsFixMeta a{margin-left:auto;background:#079397;color:white;text-decoration:none;border-radius:8px;padding:6px 8px;font-weight:700}@media(max-width:1200px){.sbsFixGrid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:900px){.sbsFixGrid{grid-template-columns:repeat(2,minmax(0,1fr))}}`;
    document.head.appendChild(style);
    ['change','input'].forEach(ev=>{type.addEventListener(ev,()=>setTimeout(renderSBS,0));capacity.addEventListener(ev,()=>setTimeout(renderSBS,0));document.getElementById('brand')?.addEventListener(ev,()=>setTimeout(renderSBS,0));document.getElementById('channel')?.addEventListener(ev,()=>setTimeout(renderSBS,0));document.getElementById('price')?.addEventListener(ev,()=>setTimeout(renderSBS,0));document.getElementById('search')?.addEventListener(ev,()=>setTimeout(renderSBS,0));});
    const refresh=document.getElementById('refreshBtn'); if(refresh){refresh.textContent='↻ 刷新数据';refresh.onclick=()=>{refresh.textContent='↻ 刷新中…';setTimeout(()=>location.reload(),120);};}
    if(type.value==='SBS'){capacity.value='600+';renderSBS();}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else install();
})();
