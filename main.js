// Hamburger menu //
const menu = document.getElementById('hamburger')
const close = document.getElementById('close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
});
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
});
