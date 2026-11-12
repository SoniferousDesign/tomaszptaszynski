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
