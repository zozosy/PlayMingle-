  console.log("damm it number guesser is not working...");

  // Get DOM elements
  const numericInput = document.getElementById('numericInput');
  const selectButton = document.getElementById('select');
  const backButton = document.getElementById('back');
  const attemptsText = document.querySelector('#game p');
  const resultText = document.querySelector('#bottom p');
  const replayButton = document.getElementById('replay');
  const scoreText = document.querySelector('#top p');

  // Set the target number (randomly between 0 and 100)
  const targetNumber = Math.floor(Math.random() * 101);

  // Initialize game variables
  let attemptsLeft = 5;
  let score = 0;

  // Function to update the game state
  function updateGameState() {
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

      // Update the score and attempts text
      scoreText.textContent = `Score: ${score}`;
      attemptsText.textContent = `Number of attempts left: ${attemptsLeft}`;

      // Clear the input field
      numericInput.value = '';
  }

  // Event listeren for "Back" button
  backButton.addEventListener('click', () => {
      window.location.href = 'playmingle.html';
  });

  // Event listener for the "Select" button
  selectButton.addEventListener('click', updateGameState);

  // Event listener for the "Replay" button
  replayButton.addEventListener('click', () => {
      // Reset the game state
      attemptsLeft = 5;
      //   score = 0;
      replayButton.style.display = 'none';
      selectButton.disabled = false;
      resultText.textContent = '';
      //   scoreText.textContent = 'Score: 0';
      attemptsText.textContent = 'Number of attempts left: 5';
      targetNumber = Math.floor(Math.random() * 101);
  });

  var select = document.getElementById("games-dropdown");
  select.addEventListener("change", function() {
      var selectedOption = select.options[select.selectedIndex].value;
      if (selectedOption) {
          window.location.href = selectedOption + ".html";
      }
  });