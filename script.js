const mobileMenu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    mobileMenu.classList.toggle('toggle');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            mobileMenu.classList.remove('toggle');
        }

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const HamburgerAnimation = `
.toggle .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}
.toggle .bar:nth-child(2) {
    opacity: 0;
}
.toggle .bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = HamburgerAnimation;
document.head.appendChild(styleSheet);
