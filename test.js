function frontPagePoll(){
    let data = JSON.parse(localStorage.getItem('data')) || [];
    for (let i = 2; i< data.lenght; i++){
        let ul = document.createElement("ul");
        let h2 = document.createElement("h2");
        document.querySelector('.poll').appendChild(ul);
        ul.appendChild(h2)
        h2.textContent = data[i].newPoll.questions
    }
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