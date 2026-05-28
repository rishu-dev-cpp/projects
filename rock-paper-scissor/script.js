const result = document.getElementById('result')

function computerFnc(){
    return Math.floor(Math.random() * 3) + 1;
} 
function playGame(userChoice){
    const compChoice = computerFnc();

    if(userChoice === compChoice){
        result.style.backgroundColor = "#272730";
        result.innerText = `Match Tie! Both chose the same.`;
        return;
    }
    if(
        userChoice === 1 && compChoice === 3 || // Rock > Scissor
        userChoice === 2 && compChoice === 1 || // Paper > Rock
        userChoice === 3 && compChoice === 2  // Scissor > Paper
    ){
        result.style.backgroundColor = "#272730";
        result.innerText = "Congrats! You Win! 🎉";
    }else {
        result.style.backgroundColor = "#272730";
        result.innerText = "You Loose! 😶 Better luck next time.";
    }
}
