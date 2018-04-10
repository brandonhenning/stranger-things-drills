function createPage(){
    const url = 'https://quiet-bayou-99554.herokuapp.com/api/v1/contacts'
    fetch (url)
        .then(response => response.json())
        .then(response => response.data)
        .then(data => data.forEach(buildList))
}

function buildList(character){
    const li = document.createElement('li')
    const elements = [
        createImage(character.imageURL, character.name),
        createName(character.name, character.phone),
        createMessage(character.message),
        addLink(character.name)
    ].forEach(element => li.appendChild(element))

    document.querySelector('#characters').appendChild(li)
}

function createImage(imageUrl, altText){
    const image = document.createElement('img')
    image.src = imageUrl
    image.alt = altText
    return image
}

function createName(name, phoneNumber){
    return buildElement('span', `${name} - ${phoneNumber}`)
}

function createMessage(message){
    return buildElement('p', message)
}

function addLink(name){
    const a = buildElement('a', `Leave ${name} a message`)
    a.href = `contact.html?character=${name}`
    return a
}

function buildElement(tagName, text){
    const element = document.createElement(tagName)
    const msg = document.createTextNode(text)
    element.appendChild(msg)
    return element
}

createPage()
