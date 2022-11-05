function signIn(){
    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    let username = document.getElementById('idLogIn').value
    let password = document.getElementById('passwordLogIn').value

    if(username == 'admin' && password == 'asd123'){
        console.log('admin logged in')
        sessionStorage.setItem('currentLoggedIn','admin');
        document.getElementById('myAccount').style.display='list-item'
        document.getElementById('login').style.display='none'
        LogInPopUp.classList.remove('open-logInPopUp')
        return;
    }else{
        for(let i = 0; i < userData.length; i++){
            console.log(userData[i].newUser.username)
            if(userData[i].newUser.username === username && userData[i].newUser.password === password){
                sessionStorage.setItem('currentLoggedIn',username);
                document.getElementById('myAccount').style.display='list-item'
                document.getElementById('login').style.display='none'
                LogInPopUp.classList.remove('open-logInPopUp')
                return;
            }
            else{
                console.log('incorrect username or password')
                return;
            }
        }
    }
}