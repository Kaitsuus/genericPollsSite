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
    // create polls structure from localStorage to DOM //
    for (let i = 0; i< data.length; i++){
        let ul = document.createElement("ul");
        let h2 = document.createElement("h2");
        let button = document.createElement("button");

        // create delete poll button //
        button.setAttribute('class', 'deletePoll')
        button.textContent = 'Delete'
        ul.appendChild(button)
        
        // add delete function to button //
        button.addEventListener('click', function(){
            console.log('clicked ' + [i] + 'delete button')
            data.splice([i], 1)
            console.log(data)
            localStorage.setItem('data', JSON.stringify(data));
        });
        // create questions for polls //
        console.log(data[i])
        document.querySelector('.poll').appendChild(ul);
        ul.appendChild(h2)
        h2.textContent = data[i].newPoll.questions

        // create options for polls to DOM //
        for (let y = 0; y < data[i].newPoll.answers.length; y++){
            let x = 0;
            let li = document.createElement('li');
            let input = document.createElement('input')
            ul.appendChild(li)
            li.appendChild(input)
            input.setAttribute('type', 'button')
            input.setAttribute('class', 'voteButton')

            // create voting function for buttons //
            input.addEventListener('click', function(){
                x++
                console.log('clicked ' + data[i].newPoll.answers[y])
                console.log(data[i].newPoll.answers[y] + ' clicks ' + x)
                data[i].newPoll.value[y]++
                localStorage.setItem('data', JSON.stringify(data));
                input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])
            });
            input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])
        
        }
    }

}
parseData()

