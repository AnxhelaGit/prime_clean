const menuBtn=document.getElementById('menuBtn');const nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Mbyll menunë':'Hap menunë')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav?.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false')}});
const range=document.getElementById('compareRange');const layer=document.querySelector('.before-layer');const handle=document.getElementById('compareHandle');
function updateCompare(){const v=range.value;layer.style.width=v+'%';handle.style.left=v+'%'} range?.addEventListener('input',updateCompare);updateCompare();
const form = document.getElementById('quoteForm');

form?.addEventListener('submit', e => {
    e.preventDefault();

    const service = document.getElementById('service').value;
    const size = document.getElementById('size').value;
    const area = document.getElementById('area').value;

    if (!service || !size || !area) {
        return;
    }

    const message =
        `Përshëndetje PrimeClean, dua të kërkoj një ofertë.%0A%0A` +
        `Shërbimi: ${service}%0A` +
        `Sipërfaqja: ${size}%0A` +
        `Zona: ${area}`;

    const whatsappUrl = `https://wa.me/355683257956?text=${message}`;

    window.open(whatsappUrl, '_blank');
});
