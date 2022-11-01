/*
const addPoll = document.getElementById('lisaa')
const poll = document.querySelector('poll')
const li = document.createElement("li");
const ul = document.createElement("ul");
const form = document.createElement('form')
const polls = document.getElementById('polls')
*/



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
function luo(){
    // create ul & h2 elements //
    let ul = document.createElement("ul");
    let h2 = document.createElement("h2");
    let question = document.querySelector('.pollQ').value;
    document.querySelector('.poll').appendChild(ul);
    ul.appendChild(h2)
    h2.textContent = question
    console.log(document.querySelectorAll('.option'));
    let options = document.querySelectorAll('.option')
    // create new poll //
    for (let i = 0; i< options.length; i++){
        let li = document.createElement('li');
        let input = document.createElement('input')
        document.querySelector('.poll').appendChild(ul);
        console.log(options[i].value)
        ul.appendChild(li)
        li.appendChild(input)
        input.setAttribute('type', 'button')
        input.setAttribute('value', options[i].value)
        input.setAttribute('class', 'voteButton')
        removeOption();
    }

}
/*
addPoll.addEventListener("click", function(){
    document.querySelector('#vaihtoehdot').appendChild(input);
    input.setAttribute('type', 'text', 'value', 'anna vaihtoehto');
});*/

/*
function newForm() {
    return document.createElement('form');
    }

addPoll.addEventListener("click", function(){
    polls.appendChild(form)
    form.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(input)
    input.setAttribute('type', 'text');
    ul.appendChild(button)
    
    
})
*/

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