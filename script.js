document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('nav');

    menuBtn?.addEventListener('click', () => {
        const open = nav?.classList.toggle('open') ?? false;

        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute(
            'aria-label',
            open ? 'Mbyll menunë' : 'Hap menunë'
        );
    });

    nav?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            nav?.classList.remove('open');
            menuBtn?.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            nav?.classList.remove('open');
            menuBtn?.setAttribute('aria-expanded', 'false');
        }
    });


    // BEFORE / AFTER
    const range = document.getElementById('compareRange');
    const layer = document.querySelector('.before-layer');
    const handle = document.getElementById('compareHandle');

    function updateCompare() {
        if (!range || !layer || !handle) return;

        const value = range.value;

        layer.style.width = value + '%';
        handle.style.left = value + '%';
    }

    range?.addEventListener('input', updateCompare);
    updateCompare();


    // WHATSAPP FORM
    const form = document.getElementById('quoteForm');

    form?.addEventListener('submit', e => {
        e.preventDefault();

        const service = document.getElementById('service')?.value;
        const size = document.getElementById('size')?.value;
        const area = document.getElementById('area')?.value;

        if (!service || !size || !area) {
            return;
        }

        const text =
            `Përshëndetje PrimeClean, dua të kërkoj një ofertë.\n\n` +
            `Shërbimi: ${service}\n` +
            `Sipërfaqja: ${size}\n` +
            `Zona: ${area}`;

        const whatsappUrl =
            `https://wa.me/355683257956?text=${encodeURIComponent(text)}`;

        window.location.href = whatsappUrl;
    });

});
