
const addPoll = document.getElementById('lisaa')
const poll = document.querySelector('poll')
const li = document.createElement("li");
const ul = document.createElement("ul");

addPoll.addEventListener('click', () => {

    ul.appendChild(li);
})

var form = document.getElementById("form");

function newLi() {
    return document.createElement("li");
    }

addPoll.addEventListener("click", function(){
    //Create a separate <ul> each time, give it a class, and add it.
    ul.class = "formList";
    form.appendChild(ul);

    //create new <li>'s and append them
    formList.appendChild(newLi());
    formList.appendChild(newLi());
    formList.appendChild(newLi());

    //
})

/*/ lisää testeja //

formData.push({username: username, password: password});
localStorage.setItem('username', JSON.stringify(formData));
for(let i=0; i<formData.length; i++){
    console.log(formData[i]['username'])
*/

/*
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
    localStorage.setItem('users',
    JSON.stringify({username: username, password: password, email, email})
    );
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
// Update local storage //

function updateUI(){
    let values = [], keys = Object.keys(localStorage), i = keys.length;
    while (i--) { values.push(localStorage.getItem(keys[i]));}
}
*/