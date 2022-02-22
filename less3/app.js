const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS= 'COMPUTER WINS';

let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`);
        return;
    }
    return selection;
};

const getComputerChoice = function () {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
    cChoice === pChoice
        ? RESULT_DRAW
        : (cChoice === ROCK && pChoice === PAPER) ||
          (cChoice === PAPER && pChoice === SCISSORS) ||
          (cChoice === SCISSORS && pChoice === ROCK)
            ? RESULT_PLAYER_WINS
            : RESULT_COMPUTER_WINS;

    /*if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }*/

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game start...');
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let winner;
    if (playerSelection) {
        winner = getWinner(computerSelection, playerSelection);
    } else {
        winner = getWinner(computerSelection);
    }
    let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, com picked ${computerSelection}`;
    console.log(winner);
    alert(message);
});

//
// features
//

const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = number => {
        return isNaN(number) ? 0 : number;
    };
  let sum = 0;
  for (const num of numbers) {
      if (operation === 'ADD') {
          sum += validateNumber(num);
      } else {
          sum -= validateNumber(num);
      }
  }
  resultHandler(sum);
}

/*const subtractEm = function (resultHandler) {
  let sum = 0;
  for (const num of arguments) {
      sum -= num;
  }
  resultHandler(sum, 'The result subtract is');
}*/

const showResult = (messageText, result) => {
    alert(messageText + '' + result);
}

combine(showResult.bind(this, 'The result sum is'), 'ADD', 1, 5, 10, -3, 6, 56);
combine(showResult.bind(this, 'The result subtract is'), 'SUBTRACT', 1, 5, 10, -3, 6, 56, 45, 2, -3);