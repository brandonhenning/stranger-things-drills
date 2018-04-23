const postUrl = ('https://quiet-bayou-99554.herokuapp.com/api/v1/contacts')

let params = (new URL(document.location)).searchParams
let character = params.get('character')
let nameInput = document.getElementById('character')
nameInput.value = character
let messageBox = document.querySelector('p').textContent


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
    .then(handleStatus)
})

function handleStatus (response) {
    if (response.error) {
        document.querySelector('p').textContent = response.error.message
    } else {
        document.querySelector('p').textContent = response.data.message
    }
}

