document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const resultDiv = document.getElementById('result');
    let playerScore = 0;
    let computerScore = 0;
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const playerChoice = this.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);
  
        resultDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
  
        if (result === "You win!") {
          playerScore++;
        } else if (result === "You lose!") {
          computerScore++;
        }
  
        document.getElementById('player-score').textContent = playerScore;
        document.getElementById('computer-score').textContent = computerScore;
      });
    });
  
    function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    function getResult(player, computer) {
      if (player === computer) {
        return "It's a tie!";
      } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
      ) {
        return "You win!";
      } else {
        return "You lose!";
      }
    }
  });
  