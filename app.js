(()=>{
'use strict';
const menu=document.querySelector('.menu-btn');const mobile=document.querySelector('.mobilenav');
if(menu&&mobile){menu.addEventListener('click',()=>{let on=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(on))});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false')}));}
const modal=document.querySelector('.lightbox');if(!modal)return;
const image=modal.querySelector('img'),caption=modal.querySelector('p');
const documentWrap=document.createElement('div');documentWrap.className='document-scroll';documentWrap.hidden=true;
image.parentNode.insertBefore(documentWrap,image);documentWrap.appendChild(image);
const zoomButton=document.createElement('button');zoomButton.className='doc-zoom';zoomButton.type='button';zoomButton.textContent='Powiększ +';zoomButton.hidden=true;modal.appendChild(zoomButton);
zoomButton.addEventListener('click',()=>{let on=documentWrap.classList.toggle('zoomed');zoomButton.textContent=on?'Pomniejsz −':'Powiększ +';});const triggers=[...document.querySelectorAll('.zoomable')];let index=0,prevFocus=null;
function show(i){index=(i+triggers.length)%triggers.length;let target=triggers[index];image.src=target.dataset.image;image.alt=target.dataset.caption||'';caption.textContent=target.dataset.caption||'';
const documentMode=target.classList.contains('document-view');documentWrap.hidden=!documentMode;zoomButton.hidden=!documentMode;
modal.classList.toggle('document-mode',documentMode);
if(documentMode){documentWrap.appendChild(image);}else{modal.insertBefore(image,modal.querySelector('.light-next'));}documentWrap.classList.remove('zoomed');zoomButton.textContent='Powiększ +';documentWrap.scrollTop=0;documentWrap.scrollLeft=0;}
function close(){modal.hidden=true;document.body.classList.remove('lightbox-open');image.removeAttribute('src');if(prevFocus)prevFocus.focus();}
triggers.forEach((el,i)=>el.addEventListener('click',()=>{prevFocus=document.activeElement;modal.hidden=false;document.body.classList.add('lightbox-open');show(i);modal.querySelector('.light-close').focus();}));
modal.querySelector('.light-close').addEventListener('click',close);
modal.querySelector('.light-prev').addEventListener('click',()=>show(index-1));
modal.querySelector('.light-next').addEventListener('click',()=>show(index+1));
modal.addEventListener('click',e=>{if(e.target===modal)close();});
document.addEventListener('keydown',e=>{if(modal.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')show(index+1);if(e.key==='ArrowLeft')show(index-1);});
})();

/* Lightweight UX motion, independent of the image gallery. */
(()=>{
  'use strict';
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced)return;
  const progress=document.createElement('div');
  progress.className='read-progress';progress.setAttribute('aria-hidden','true');
  document.body.appendChild(progress);
  let scheduled=false;
  function updateProgress(){
    scheduled=false;
    const max=document.documentElement.scrollHeight-window.innerHeight;
    progress.style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,window.scrollY/max)):0})`;
  }
  function onScroll(){if(!scheduled){scheduled=true;requestAnimationFrame(updateProgress)}}
  addEventListener('scroll',onScroll,{passive:true});
  addEventListener('resize',onScroll,{passive:true});updateProgress();

  if(!('IntersectionObserver' in window))return;
  const selectors=['.section-heading','.area-link','.skill-group','.stat','.design-item','.screenshot-shot','.case-feature','.implementation-group','.feature-point','.comparison-row','.account-metrics','.traffic-row'];
  const nodes=[...document.querySelectorAll(selectors.join(','))];
  // Do not hide content already visible at load or while navigating to an anchor.
  const below=nodes.filter(el=>el.getBoundingClientRect().top>innerHeight+32);
  if(!below.length)return;
  document.documentElement.classList.add('js-motion');
  below.forEach((el,i)=>{
    el.classList.add('motion-enter');
    el.style.setProperty('--motion-delay',`${(i%4)*35}ms`);
  });
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('motion-visible');observer.unobserve(entry.target)}
    });
  },{threshold:.08,rootMargin:'0px 0px -24px 0px'});
  below.forEach(el=>observer.observe(el));
  // Non-observed hidden elements become visible when using browser search/anchors.
  addEventListener('pagehide',()=>observer.disconnect(),{once:true});
})();
