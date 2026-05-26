let userScore = 0;
let computerScore = parseInt(prompt("Enter score to chase: ")) || 0;
let isGameOver = false;

const buttons = document.querySelectorAll('button');
const userScoreDisplay = document.querySelectorAll('h3')[0];
const compScoreDisplay = document.querySelectorAll('h3')[1];
const result = document.getElementById('result');
const restartBtn = document.getElementById('restart');

compScoreDisplay.innerText = `Computer Score: ${computerScore}`;

const winSound = "https://www.myinstants.com/media/sounds/victory_sJDDywi.mp3";
const looseSound = "https://www.myinstants.com/media/sounds/losing-cry.mp3"

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (isGameOver) return;

        const userChoice = parseInt(button.innerText);
        const compChoice = Math.floor(Math.random() * 6) + 1;

        if (userChoice === compChoice) {
            alert(`Out! Computer chose ${compChoice}.`);
            gameOver();
            
            if (userScore < computerScore) {
                result.innerText = `You lost by ${computerScore - userScore} runs!`;
                const audio = new Audio(looseSound).play();    
            }
            else if (userScore === computerScore) {
                result.innerText = `Match Tied!`;
            }
        } 
        else {
            userScore += userChoice;
            userScoreDisplay.innerText = `Your Score ${userScore}`;

            if (userScore > computerScore) {
                result.innerText = `Congrats! You won by ${userScore - computerScore} runs!`;
                gameOver();
                const audio = new Audio(winSound).play();
            }
        }
    });
});
function gameOver(){
    isGameOver = true;
    restartBtn.style.display = "block";
}
restartBtn.addEventListener('click', () => {
    isGameOver = false;
    userScore = 0;
    computerScore = parseInt(prompt("Enter score to chase: ")) || 0;
    userScoreDisplay.innerText = `Your Score: 0`;
    compScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    result.innerText = ``;
    restartBtn.style.display = "none";
});

