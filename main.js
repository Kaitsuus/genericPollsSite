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

// RegisterationPopUp //
const registeration = document.getElementById('rekisteroidu')
const closePop = document.getElementById('closeForm')
const regPopUp = document.querySelector('.formContainer')

registeration.addEventListener('click', () => {
    regPopUp.classList.add('open-registerationPopUp')
    nav.classList.remove('open-nav')
});
closePop.addEventListener('click', () => {
    regPopUp.classList.remove('open-registerationPopUp')
});

// LogInPopUp //
const logIn = document.getElementById('kirjaudu')
const closeLogInPop = document.getElementById('close2Form')
const LogInPopUp = document.querySelector('.form2Container')

logIn.addEventListener('click', () => {
    LogInPopUp.classList.add('open-logInPopUp')
    nav.classList.remove('open-nav')
});
    closeLogInPop.addEventListener('click', () => {
    LogInPopUp.classList.remove('open-logInPopUp')
});
