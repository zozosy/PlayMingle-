// ** get the computers choice **
function getComputerChoice() {
    let rpsChoices = ['Rock', 'Paper', 'Scissors']
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
    return computerChoice
}

// ** back button and it's functionality **
const backButton = document.getElementById('back');
backButton.addEventListener('click', () => {
    window.location.href = 'playmingle.html';
});

var select = document.getElementById("games-dropdown");
select.addEventListener("change", function() {
    var selectedOption = select.options[select.selectedIndex].value;
    if (selectedOption) {
        window.location.href = selectedOption + ".html";
    }
});

// ** get the scores for current round **
function getResult(playerChoice, computerChoice) {

    let score;
    if (playerChoice === computerChoice) {
        score = 0
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        score = 1

    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        score = 1
    } else {
        score = -1
    }
    return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {

    let result = document.getElementById('result')
    switch (score) {
        case -1:
            result.innerText = `You Lose!`
            break;
        case 0:
            result.innerText = `It's a Draw!`
            break;
        case 1:
            result.innerText = `You Win!`
            break;
    }

    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton)
    })

    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
}

function endGame() {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}

playGame()