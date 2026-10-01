const menu=document.querySelector('.menu-button');
const mobileNav=document.querySelector('#mobile-nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');mobileNav.hidden=true;menu.textContent='Menu';}
menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));mobileNav.hidden=expanded;menu.textContent=expanded?'Menu':'Close';});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!mobileNav.hidden){closeMenu();menu.focus();}});
const dialog=document.querySelector('#film-dialog');
if(dialog){const film=document.querySelector('#brand-film');const trigger=document.querySelector('#watch-film');trigger.addEventListener('click',()=>{dialog.showModal();film.play().catch(()=>{});});document.querySelector('#close-film').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{film.pause();trigger.focus();});dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});}
const oldRoutes={'#about':'/about/','#capabilities':'/products/','#quality':'/quality/','#contact':'/contact/'};
if(location.pathname==='/'&&oldRoutes[location.hash])location.replace(oldRoutes[location.hash]);
