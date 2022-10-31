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

// Registeration //
const registerUser = e => {
    let username = document.getElementById('id').value,
        password = document.getElementById('salasana').value,
        email = document.getElementById('email').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => 
        data.username.toLowerCase() == username.toLowerCase()
        );

    if(!exist){
        formData.push({username, password, email});
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log(formData);
        document.getElementById('lomakeH1').innerHTML = ('Kiitos rekisteröitymisestä')
        setTimeout(() => regPopUp.classList.remove('open-registerationPopUp'), 1000);
        document.getElementById('lomake').reset();
    }
    else{
        document.getElementById('lomakeH1').innerHTML = ('Olet jo rekisteröitynyt!')
        setTimeout(() => regPopUp.classList.remove('open-registerationPopUp'), 1000);
    }
    e.preventDefault();

}
// Login //

function signIn(e) {
    let username = document.getElementById('idLogIn').value,
        password = document.getElementById('salasanaLogIn').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.username.toLowerCase() == username && data.password.toLowerCase() == password);
    if(username == 'admin' && password == 'asd123'){
        console.log('admin logged in')
        sessionStorage.setItem('currentLoggedIn','admin');
        document.getElementById('omatili').style.display='list-item'
        document.getElementById('kirjaudu').style.display='none'
        LogInPopUp.classList.remove('open-logInPopUp')
        return;
    }
    else if(!exist){
        console.log('incorrect username or password')
    }
    else{
        sessionStorage.setItem('currentLoggedIn',username);
        console.log(username)
        document.getElementById('omatili').style.display='list-item'
        document.getElementById('kirjaudu').style.display='none'
        LogInPopUp.classList.remove('open-logInPopUp')
        return;
    }
    e.preventDefault();
}
let loggedin = sessionStorage.getItem('currentLoggedIn');

function testUserOnline(){
    if (sessionStorage.getItem('currentLoggedIn') === 'admin'){
        document.getElementById('omatili').style.display='list-item'
        document.getElementById('kirjaudu').style.display='none'
        document.getElementById('logout').style.display='list-item'
    } 
    else{
        document.getElementById('omatili').style.display='none'
        document.getElementById('kirjaudu').style.display='list-item'
        document.getElementById('logout').style.display='none'
    }
}
testUserOnline()

function logOut(){
    sessionStorage.clear()
}


// voting //

let userVoted = document.getElementsByClassName('voteButton');

for (let voteButton of userVoted) {
    voteButton.addEventListener('click', function handleClick(event){
        console.log('box clicked ', event);
        voteButton.setAttribute('value', 'asd');
    });
}

