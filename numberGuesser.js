  let secretNumber = generateRandomNumber(1, 100);
  let attemptsLeft = 5;
  let score = 0;

  // DOM elements
  const numericInput = document.getElementById("numericInput");
  const selectButton = document.getElementById("select");
  const replayButton = document.getElementById("replay");
  const winLooseText = document.getElementById("winLoose");
  const scoreText = document.getElementById("ng_score");
  const attemptsLeftText = document.getElementById("attemptsLeft");

  // Initialize the game
  updateAttemptsLeft();
  replayGame();

  // Event listener for the Select button
  selectButton.addEventListener("click", function() {
      const userGuess = parseInt(numericInput.value);

      if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
          alert("Please enter a valid number between 0 and 100.");
          return;
      }

      if (userGuess === secretNumber) {
          // User guessed correctly
          score++;
          scoreText.textContent = `Score: ${score}`;
          winLooseText.textContent = "You Win!";
          replayButton.style.display = "inline"; // Show the replay button
          selectButton.style.display = "none"; // Hide the select button
      } else {
          // User guessed incorrectly
          attemptsLeft--;
          updateAttemptsLeft();

          if (attemptsLeft === 0) {
              // No attempts left, user lost
              winLooseText.textContent = "Sorry, you lose!";
              replayButton.style.display = "inline"; // Show the replay button
              selectButton.style.display = "none"; // Hide the select button
          }
      }
  });

  // Event listener for the Replay button
  replayButton.addEventListener("click", replayGame);

  // Function to generate a random number between min and max (inclusive)
  function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to update the attempts left text
  function updateAttemptsLeft() {
      attemptsLeftText.textContent = `Number of attempts left: ${attemptsLeft}`;
  }

  // Function to reset the game
  function replayGame() {
      secretNumber = generateRandomNumber(1, 100);
      attemptsLeft = 5;
      updateAttemptsLeft();
      winLooseText.textContent = "";
      numericInput.value = ""; // Clear the input field
      replayButton.style.display = "none"; // Hide the replay button
      selectButton.style.display = "inline"; // Show the select button
  }

  // console.log("damm it number guesser is not working...");

  // // Get DOM elements
  // const numericInput = document.getElementById('numericInput');
  // const selectButton = document.querySelector('button');
  // const attemptsText = document.querySelector('#game p');
  // const resultText = document.querySelector('#bottom p');
  // const replayButton = document.getElementById('replay');
  // const scoreText = document.querySelector('#top p');

  // // Set the target number (randomly between 0 and 100)
  // const targetNumber = Math.floor(Math.random() * 101);

  // // Initialize game variables
  // let attemptsLeft = 5;
  // let score = 0;

  // // Function to update the game state
  // function updateGameState() {
  //     const guess = parseInt(numericInput.value);

  //     if (isNaN(guess)) {
  //         resultText.textContent = 'Please enter a valid number.';
  //     } else {
  //         attemptsLeft--;

  //         if (guess === targetNumber) {
  //             resultText.textContent = 'Congratulations! You guessed the correct number.';
  //             score++;
  //             replayButton.style.display = 'block';
  //             selectButton.disabled = true;
  //         } else if (attemptsLeft === 0) {
  //             resultText.textContent = `Sorry, you lose! The correct number was ${targetNumber}.`;
  //             replayButton.style.display = 'block';
  //             selectButton.disabled = true;
  //         } else if (guess < targetNumber) {
  //             resultText.textContent = `Try a higher number. Attempts left: ${attemptsLeft}`;
  //         } else {
  //             resultText.textContent = `Try a lower number. Attempts left: ${attemptsLeft}`;
  //         }
  //     }

  //     // Update the score and attempts text
  //     scoreText.textContent = `Score: ${score}`;
  //     attemptsText.textContent = `Number of attempts left: ${attemptsLeft}`;

  //     // Clear the input field
  //     numericInput.value = '';
  // }

  // // Event listener for the "Select" button
  // selectButton.addEventListener('click', updateGameState);

  // // Event listener for the "Replay" button
  // replayButton.addEventListener('click', () => {
  //     // Reset the game state
  //     attemptsLeft = 5;
  //     score = 0;
  //     replayButton.style.display = 'none';
  //     selectButton.disabled = false;
  //     resultText.textContent = '';
  //     scoreText.textContent = 'Score: 0';
  //     attemptsText.textContent = 'Number of attempts left: 5';
  //     targetNumber = Math.floor(Math.random() * 101);
  // });