const url = ('https://quiet-bayou-99554.herokuapp.com/api/v1/contacts');

const currentCharacter = '';


function createPage () {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.data)
        return(data.data);
    })
    .then((array) => {
        array.forEach(element => {
            console.log(element.name)
            let parent = document.getElementById('characters');
            let li = document.createElement('li')
            let img = document.createElement('img')
            let description = document.createElement('p')
            let span = document.createElement('span')
            let a = document.createElement('a')
            a.textContent = `Leave ${element.name} a message`
            a.href = (`../contact.html?character=${element.name}`)
            span.textContent = `${element.name} - ${element.phone}`
            description.textContent = element.message;
            img.src = element.imageURL
            parent.appendChild(li)
            li.appendChild(img)
            li.appendChild(description)
            li.appendChild(span)
            li.appendChild(a)
        });
    })
}

createPage();


// document.querySelector('body').addEventListener('click', (element) => {
//     console.log(element)
// });