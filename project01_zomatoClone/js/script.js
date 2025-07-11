// Animate header links on hover
document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

// Input focus animation
const input = document.querySelector('input');
input.addEventListener('focus', () => {
    input.style.boxShadow = '0 0 10px red';
});
input.addEventListener('blur', () => {
    input.style.boxShadow = 'none';
});

// Page load animation for logo and text
window.addEventListener('load', () => {
    const logo = document.querySelector('main img');
    const text = document.querySelector('main p');

    logo.classList.add('fade-in');
    text.classList.add('slide-in');
});
