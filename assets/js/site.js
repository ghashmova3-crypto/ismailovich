'use strict';
document.documentElement.classList.add('js');
const nav=document.querySelector('.nav'),menu=document.querySelector('.menu-toggle');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','فتح القائمة')}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة')});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
window.addEventListener('resize',()=>{if(innerWidth>720)closeMenu()},{passive:true});
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('waiting');observer.unobserve(e.target)}}),{threshold:.08});reveals.forEach(el=>{el.classList.add('waiting');observer.observe(el)})}
const sections=[...document.querySelectorAll('section[id]')],links=[...nav.querySelectorAll('a')];
let scheduled=false;
function updateScroll(){const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress').style.width=(max>0?scrollY/max*100:0)+'%';let active='';sections.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)active=s.id});links.forEach(a=>{const match=a.hash==='#'+active;a.classList.toggle('active',match);if(match)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});scheduled=false}
window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateScroll)}},{passive:true});updateScroll();
const cards=[...document.querySelectorAll('.project')],filters=[...document.querySelectorAll('.filter')],more=document.querySelector('#more'),status=document.querySelector('#gallery-status');let filter='all',expanded=false;
function matching(){return cards.filter(c=>filter==='all'||c.dataset.category.split(' ').includes(filter))}
function refreshGallery(){const matches=matching();cards.forEach(c=>{c.hidden=!matches.includes(c)||(!expanded&&matches.indexOf(c)>=6)});more.hidden=expanded||matches.length<=6;status.textContent=Math.min(expanded?matches.length:6,matches.length)+' من '+matches.length+' عملًا'}
function setFilter(value){filter=value;expanded=false;filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===value)));refreshGallery()}
filters.forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
more.addEventListener('click',()=>{expanded=true;refreshGallery();const first=matching()[6];if(first)first.querySelector('button').focus({preventScroll:true})});
document.querySelectorAll('[data-jump-filter]').forEach(a=>a.addEventListener('click',()=>setFilter(a.dataset.jumpFilter)));
const box=document.querySelector('#lightbox'),boxImage=document.querySelector('#lightbox-image');let current=null,opener=null;
function showCard(card){current=card;boxImage.src=card.querySelector('img').src;boxImage.alt=card.querySelector('img').alt;document.querySelector('#lightbox-title').textContent=card.dataset.title;document.querySelector('#lightbox-category').textContent=card.dataset.label;const list=matching();document.querySelector('#lightbox-counter').textContent=String(list.indexOf(card)+1).padStart(2,'0')+' / '+String(list.length).padStart(2,'0')}
cards.forEach(c=>c.querySelector('button').addEventListener('click',()=>{opener=c.querySelector('button');showCard(c);box.showModal();document.body.classList.add('locked')}));
function moveCard(direction){const list=matching();showCard(list[(list.indexOf(current)+direction+list.length)%list.length])}
document.querySelector('#prev').addEventListener('click',()=>moveCard(-1));document.querySelector('#next').addEventListener('click',()=>moveCard(1));
document.querySelector('.dialog-close').addEventListener('click',()=>box.close());box.addEventListener('click',e=>{if(e.target===box)box.close()});
box.addEventListener('close',()=>{document.body.classList.remove('locked');if(opener)opener.focus({preventScroll:true})});
box.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();moveCard(1)}if(e.key==='ArrowRight'){e.preventDefault();moveCard(-1)}});
if(new URLSearchParams(location.search).has('capture')){document.documentElement.classList.add('capture');expanded=true;}refreshGallery();document.querySelector('#year').textContent=new Date().getFullYear();
