// Intersection Observer for Reveal Animations
const revealElements = document.querySelectorAll('.project-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease-out";
    revealObserver.observe(el);
});

// Dynamic Navbar Blur
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(2, 6, 23, 0.8)";
        nav.style.padding = "15px 5%";
    } else {
        nav.style.background = "transparent";
        nav.style.padding = "25px 5%";
    }
});