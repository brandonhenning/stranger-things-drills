const url = ('https://galvanize-leader-board.herokuapp.com/api/v1/leader-board');
const postURL = ('https://galvanize-leader-board.herokuapp.com/api/v1/leader-board');


function updateScores () {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (var i = (data.length - 3); i < data.length; i++) {
            let p = document.createElement('p')
            let span = document.createElement('span')
            let score = document.createElement('span')
            score.className = 'score'
            score.textContent = data[i].score
            span.className = 'player-name'
            span.textContent = data[i].player_name
            p.className = 'score-card'
            document.querySelector('.scores').appendChild(p)
            p.appendChild(span)
            p.appendChild(score)
        }
    })
}

window.onload = updateScores();


document.querySelector('canvas').addEventListener('gameOver', function (event) {
    let currentPlayer = document.querySelector('.big-input').value;
    let data = {'game_name': 'GBP', 'player_name': currentPlayer, "score": score}

    fetch(postURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(res => res.json())
    .catch(error => console.log('Error', error))
    .then(response => console.log('Success', response))

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (var i = (data.length - 3); i < data.length; i++) {
            document.querySelector('.player-name').textContent = data[i].player_name
            document.querySelector('.score').textContent = data[i].score
        }
    })
});

