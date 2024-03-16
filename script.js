
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const dots = document.querySelector('.dots');

    dots.addEventListener('click', () => {
        nav.classList.toggle('nav--one');
        dots.classList.toggle('dots--open');
    });
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


