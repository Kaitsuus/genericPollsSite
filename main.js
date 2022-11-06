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
const registeration = document.getElementById('register')
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
const logIn = document.getElementById('login')
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
let userData = JSON.parse(localStorage.getItem('userData')) || [];
function registerUser(){
    let username = document.getElementById('id').value
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value;
    const newUser ={
        username,
        password,
        email,
        voted:[]
    }
    if (localStorage.getItem("userData") === null){
        userData.push({newUser});
        localStorage.setItem('userData', JSON.stringify(userData));
        document.getElementById('lomakeH1').innerHTML = ('Kiitos rekisteröitymisestä')
        setTimeout(() => regPopUp.classList.remove('open-registerationPopUp'), 1000);
        document.getElementById('lomake').reset();
    }else{
        for(let i = 0; i < userData.length; i++){
            console.log(userData[i].newUser.username)
            if(userData[i].newUser.username === document.getElementById('id').value){
                console.log(username + ' on olemassa')
                document.getElementById('lomakeH1').innerHTML = ('Olet jo rekisteröitynyt!')
                setTimeout(() => regPopUp.classList.remove('open-registerationPopUp'), 1000);
            }
            else{
                userData.push({newUser});
                localStorage.setItem('userData', JSON.stringify(userData));
                document.getElementById('lomakeH1').innerHTML = ('Kiitos rekisteröitymisestä')
                setTimeout(() => regPopUp.classList.remove('open-registerationPopUp'), 1000);
                document.getElementById('lomake').reset();
                return;
            }
        }

    }
}


// login //
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
            }else{
                console.log('incorrect username or password')
                return;
            }
        }
    }
}
let position = NaN
function currentUserIndex(){
    if(sessionStorage.getItem('currentLoggedIn')!= null && sessionStorage.getItem('currentLoggedIn') != 'admin'){
        let currentUser = sessionStorage.getItem('currentLoggedIn')
        let userData = JSON.parse(localStorage.getItem('userData')) || [];
        for(let i = 0; i < userData.length; i++){
            if(userData[i].newUser.username === currentUser){
                console.log(i)
                position = i
                console.log(position)
            }
        }
    }
}
currentUserIndex()

// User online boolean //

let userOffline = true;

function userIsOnline(){
    userOffline = false;
}
function userIsOffline(){
    userOffline = true;
}

let loggedin = sessionStorage.getItem('currentLoggedIn');
function testUserOnline(){
    if (sessionStorage.getItem('currentLoggedIn') === 'admin'){
        document.getElementById('myAccount').style.display='list-item'
        document.getElementById('login').style.display='none'
        document.getElementById('logout').style.display='list-item'
        document.getElementById('register').style.display='none'
        document.getElementById('options').style.display='grid'
        
        userIsOnline();
        console.log('user is offline ' + userOffline)
        //document.getElementById('userInfo').innerHTML = ' Admin'
    }
    if (sessionStorage.getItem('currentLoggedIn')!= null){
        document.getElementById('myAccount').style.display='list-item'
        document.getElementById('login').style.display='none'
        document.getElementById('logout').style.display='list-item'
        document.getElementById('register').style.display='none'
        userIsOnline();
        console.log('user is offline ' + userOffline)
        //document.getElementById('userInfo').innerHTML = ' ' + sessionStorage.getItem('currentLoggedIn',username);
    }
    else{
        document.getElementById('myAccount').style.display='none'
        document.getElementById('login').style.display='list-item'
        document.getElementById('logout').style.display='none'
        document.getElementById('register').style.display='list-item'
        userIsOffline()
        console.log('user is offline ' + userOffline)
    }
}
testUserOnline()

function logOut(){
    sessionStorage.clear()
    userIsOffline()
    console.log('user is offline ' + userOffline)
}


// voting system //

function addOption(){
    // add voting option //
    let input = document.createElement('input')
    let li = document.createElement('li');
    document.querySelector('#options').appendChild(li);
    li.appendChild(input)
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'option');
    input.setAttribute('value', 'give option');
}
function removeOption(){
    // remove option //
    let element = document.querySelector('.option')
    let liElemenet = document.querySelector('li')
    liElemenet.remove()
    element.remove()
}



let data = JSON.parse(localStorage.getItem('data')) || [];
function ls(){
    data.push({testPoll});
    localStorage.setItem('data', JSON.stringify(data));
}

function createApoll(){
    let ul = document.createElement("ul");
    let h2 = document.createElement("h2");
    let questions = document.querySelector('.pollQ').value;
    let options = document.querySelectorAll('.option')
    document.querySelector('.poll').appendChild(ul);
    ul.appendChild(h2)
    h2.textContent = questions
    // create new poll for localStorage //
    const newPoll = {
        questions,
        answers:[],
        value:[]
    }
    data.push({newPoll})
    localStorage.setItem('data', JSON.stringify(data))
    // create options for new poll //
    for (let i = 0; i< options.length; i++){
        let newOption = options[i].value;
        newPoll.answers.push(newOption)
        newPoll.value.push(0)
        localStorage.setItem('data', JSON.stringify(data));
    
        // create new options for DOM //
        let x = 0
        let li = document.createElement('li');
        let input = document.createElement('input')
        ul.appendChild(li)
        li.appendChild(input)
        input.setAttribute('type', 'button')
        input.setAttribute('value', newOption + ' ' + 'Votes: ' + x)
        input.setAttribute('class', 'voteButton')
        
        // add click & calculate clicks function for new buttons //
        input.addEventListener('click', function(){
            x++;
            console.log('clicked ' + newOption)
            input.setAttribute('value', newOption + ' ' + 'Votes: ' + x)
        });

    }
    console.log(data)
    removeOption();

}
    // create polls for dom on load //
function parseData(){
    let data = JSON.parse(localStorage.getItem('data')) || [];
    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    // create polls structure from localStorage to DOM //
    for (let i = 0; i< data.length; i++){
        let ul = document.createElement("ul");
        let h2 = document.createElement("h2");
        let button = document.createElement("button");

        // create delete poll button //
        if (sessionStorage.getItem('currentLoggedIn') === 'admin'){
            button.setAttribute('class', 'deletePoll')
            button.setAttribute('id', 'deletePoll')
            button.textContent = 'Delete'
            ul.appendChild(button)
        
        // add delete function to button //
            button.addEventListener('click', function(){
                console.log('clicked ' + [i] + 'delete button')
                data.splice([i], 1)
                console.log(data)
                localStorage.setItem('data', JSON.stringify(data));
            });
        }
        // create questions for polls //
        console.log(data[i])
        document.querySelector('.poll').appendChild(ul);
        ul.appendChild(h2)
        h2.textContent = data[i].newPoll.questions

        // create options for polls to DOM //
        for (let y = 0; y < data[i].newPoll.answers.length; y++){
            let li = document.createElement('li');
            let input = document.createElement('input')
            ul.appendChild(li)
            li.appendChild(input)
            input.setAttribute('type', 'button')
            input.setAttribute('class', 'voteButton')

            // create voting function for buttons //
            input.addEventListener('click', function(){
                //test if loggedin//
                if (userOffline == false){
                    //test if admin//
                    if(sessionStorage.getItem('currentLoggedIn') != 'admin'){
                        //test if allready voted//
                        for(let l = 0; l < userData[position].newUser.voted.length; l++){
                            //inform if allready voted//
                            if(userData[position].newUser.voted.includes(data[i].newPoll.questions)){
                                alert('Olet jo äänestänyt tätä')
                                return;
                            }else{
                                //vote and save data//
                                userData[position].newUser.voted.push(data[i].newPoll.questions)
                                localStorage.setItem('userData', JSON.stringify(userData));
                                data[i].newPoll.value[y]++
                                localStorage.setItem('data', JSON.stringify(data));
                                input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])
                                return;
                            }

                        }
                    }else{
                        // you are admin, you dont have rules //
                        data[i].newPoll.value[y]++
                        localStorage.setItem('data', JSON.stringify(data));
                        input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])
                    }
                }
            });
            input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])
        
        }
    }

}

// Frontpage Polls //
function frontPagePoll(){
    let data = JSON.parse(localStorage.getItem('data')) || [];
    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    // create polls structure from localStorage to DOM //
    for (let i = 0; i< data.length; i++){
        let ul = document.createElement("ul");
        let h2 = document.createElement("h2");
        let button = document.createElement("button");
        // create questions for polls //
        console.log(data[i])
        document.querySelector('.pollsContainer').appendChild(ul);
        ul.appendChild(h2)
        h2.textContent = data[i].newPoll.questions

        // create options for polls to DOM //
        for (let y = 0; y < data[i].newPoll.answers.length; y++){
            let li = document.createElement('li');
            let input = document.createElement('input')
            ul.appendChild(li)
            li.appendChild(input)
            input.setAttribute('type', 'button')
            input.setAttribute('class', 'voteButton')
            input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])
        }

    }
}


