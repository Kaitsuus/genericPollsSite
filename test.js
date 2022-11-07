input.addEventListener('click', function(){
    //test if loggedin//
    if (userOffline == false){
        //test if admin//
        if(sessionStorage.getItem('currentLoggedIn') != 'admin'){
            if(userData[position].newUser.voted.length < 0){
                userData[position].newUser.voted.push(data[i].newPoll.questions)
                localStorage.setItem('userData', JSON.stringify(userData));
                data[i].newPoll.value[y]++
                localStorage.setItem('data', JSON.stringify(data));
                input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])
                return;
            }
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
        }
        else{
            // you are admin, you dont have rules //
            data[i].newPoll.value[y]++
            localStorage.setItem('data', JSON.stringify(data));
            input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])
        }
    }
});
input.setAttribute('value', data[i].newPoll.answers[y] + ' ' + 'Votes: ' + data[i].newPoll.value[y])