const url = ('https://galvanize-leader-board.herokuapp.com/api/v1/leader-board')
const postURL = ('https://galvanize-leader-board.herokuapp.com/api/v1/leader-board')
const scoreBoard = document.querySelector('.scores')


function fetchScores () {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        return getHighscore(data)
    })
    .then(topScores => {
        refreshScores(topScores)
    })
}

function getHighscore (data) {
    data.sort((a, b) => b.score - a.score)
    let scores = [data[0], data[1], data[2]]
    return scores
}

function refreshScores (topScores) {
    scoreBoard.innerHTML = ''
    return topScores.forEach(topScore => {
        let p = document.createElement('p')
        let score = document.createElement('span')
        score.className = 'score'
        score.textContent = topScore.score
        let span = document.createElement('span')
        span.className = 'player-name'
        span.textContent = topScore.player_name
        p.className = 'score-card'
        scoreBoard.appendChild(p)
        p.appendChild(span)
        p.appendChild(score)
    })
}


function gameOver() {
    alert(`GAME OVER! Your score is: ${score}`)
    const data = {
      game_name: 'GBP',
      player_name: document.querySelector('input').value,
      score
    }
    postScore(data)
      .then(fetchScores)
  }
  
  function postScore(data) {
    return fetch(postURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(handleResponse).catch(error => {
      console.error(error)
    })
  }
  
  function handleResponse(response) {
    if(response.ok) {
      return response.json()
    } else {
      return response.json().then(error => {
        throw error
      })
    }
  }


fetchScores()
canvas.addEventListener('gameOver', gameOver)


