const numericInput = document.getElementById('numericInput');
const selectButton = document.getElementById('select');
const backButton = document.getElementById('back');
const attemptsText = document.querySelector('#game p');
const resultText = document.querySelector('#bottom p');
const replayButton = document.getElementById('replay');
const scoreText = document.querySelector('#top p');

let targetNumber = Math.floor(Math.random() * 101); //jst changed CONST to LET to declare it as variable,  uh initially declared targetNumber as a const. However, because uh  want to re-assign a new random value to it after clicking the "Replay" button, uh should change it to LET to allow re-assignment. nvm:|!..

let attemptsLeft = 5;
let score = 0;

// Function to update the game state
function updateGameState() {

    // Check if numericInput is found
    if (!numericInput) {
        console.error("Element with ID 'numericInput' not found.");
        return; // Exit the function to avoid further errors
    }

    const guess = parseInt(numericInput.value);

    if (isNaN(guess)) {
        resultText.textContent = 'Please enter a valid number.';
    } else {
        attemptsLeft--;

        if (guess === targetNumber) {
            resultText.textContent = 'Congratulations! You guessed the correct number.';
            score++;
            replayButton.style.display = 'block';
            selectButton.disabled = true;
        } else if (attemptsLeft === 0) {
            resultText.textContent = `Sorry, you lose! The correct number was ${targetNumber}.`;
            replayButton.style.display = 'block';
            selectButton.disabled = true;
        } else if (guess < targetNumber) {
            resultText.textContent = `Try a higher number. Attempts left: ${attemptsLeft}`;
        } else {
            resultText.textContent = `Try a lower number. Attempts left: ${attemptsLeft}`;
        }
    }

    scoreText.textContent = `Score: ${score}`;
    attemptsText.textContent = `Number of attempts left: ${attemptsLeft}`;

    numericInput.value = '';
}


// Event listeren for "Back" button
backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Event listener for the "Select" button
selectButton.addEventListener('click', updateGameState);



// Event listener for the "Replay" button
replayButton.addEventListener('click', () => {
    // Reset the game state
    attemptsLeft = 5;
    //   score = 0;


    // replayButton.style.display = 'none'; //DISPLAY: 'BLOCK' mks an element visible, while DISPLAY: 'NONE' hides the element completely,so i commented out instead of setting it to block, nvm! 


    selectButton.disabled = false;
    resultText.textContent = '';
    // scoreText.textContent = 'Score: 0';
    attemptsText.textContent = 'Number of attempts left: 5';
    targetNumber = Math.floor(Math.random() * 101);

    numericInput.value= '';//To enable the guessed number to change upon hitting the replay button, I set the numericInput field's value to an empty string witihin a "REPLAY EVENT LISTENER" 

});

var select = document.getElementById("games-dropdown");
select.addEventListener("change", function() {
    var selectedOption = select.options[select.selectedIndex].value;
    if (selectedOption) {
        window.location.href = selectedOption + ".html";
    }
});

