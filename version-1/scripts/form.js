const postUrl = ('https://quiet-bayou-99554.herokuapp.com/api/v1/contacts');

let params = (new URL(document.location)).searchParams;
let character = params.get('character');
let nameInput = document.getElementById('character')
nameInput.value = character;


document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    let message = document.getElementById('big-message').value
    let data = {'data': {'character': character,'message': message}}
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
    .then(() => {
        document.querySelector('p').textContent = 'SUCCESS'
    })
});

