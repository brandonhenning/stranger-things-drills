const url = ('https://secure-eyrie-78012.herokuapp.com/roles');
const postUrl = ('https://secure-eyrie-78012.herokuapp.com/users')

getCharacters();
submitEvent();

function getCharacters () {
    return fetch(url).then(response => response.json()).then((data) => {
        return populateList(data)
    }).then((data) => {
        changePicture(data);
    })
}


function populateList (data) {
    data.forEach(element => {
        let option = document.createElement('option')
        option.textContent = element.label
        document.getElementById('role').appendChild(option)
    });
    return data;
}


function changePicture (data) {
    let menu = document.querySelector('select')
    menu.addEventListener('change', (event) => {
        event.preventDefault()
        let selected = event.target.value
        if (selected === 'Assassin') {
            document.querySelector('img').src = `${data[0].imageURL}`
        } else if (selected === 'Commando') {
            document.querySelector('img').src = `${data[1].imageURL}`
        } else if (selected === 'Siren'){
            document.querySelector('img').src = `${data[2].imageURL}`
        } else {
            document.querySelector('img').src = '';
        }
    })
}


function submitEvent(data) {
    let submit = document.getElementById('submit')
    submit.addEventListener('click', (event) => {
        event.preventDefault()
        let first = document.getElementById('first-name').value;
        let last = document.getElementById('last-name').value;
        let data = {firstName: first, lastName: last, role: 1}
        fetch(postUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .catch(error => console.log('Error', error))
        .then(response => console.log(('Success', response)))
        .then((response) => {
            document.querySelector('.save-status').textContent = 'Success!';
            setTimeout(() => {
               document.querySelector('.save-status').textContent = '';
            }, 4000)
        })
    })
}

