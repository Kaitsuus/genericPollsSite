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

// Register & Login //
let user = [];


function storeInfo() {
    let username = document.getElementById('id').value
    let password = document.getElementById('salasana').value
    let email = document.getElementById('email').value
    user.push({
        username: username,
        password: password,
        email: email
    })
    console.log(user);
    document.getElementById('lomakeH1').innerHTML = ('Kiitos rekisteröitymisestä')
    setTimeout(() => regPopUp.classList.remove('open-registerationPopUp'), 1000);
    
}
function getInfo() {
    let username = document.getElementById('idLogIn').value
    let password = document.getElementById('salasanaLogIn').value
    if(username == 'admin' && password == 'asd123'){
        console.log('admin is logged in')
        document.getElementById('omatili').style.display='unset'
        document.getElementById('kirjaudu').style.display='none'
        LogInPopUp.classList.remove('open-logInPopUp')
        return;
    }else{
        for(i = 0; i < user.length; i++){
            if(username == user[i].username && password == user[i].password){
                console.log(username + ' is logged in')
                document.getElementById('omatili').style.display='list-item'
                document.getElementById('kirjaudu').style.display='none'
                LogInPopUp.classList.remove('open-logInPopUp')
                return;
            }
        }
        console.log('incorrect username or password')
    }
}
