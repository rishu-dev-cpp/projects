const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-btn'); 
const scoreCard = document.getElementById('score-card');
const finalScoreElement = document.getElementById('final-score');
const optionsBox = document.querySelector('.options-box'); 

const quizData = [
    {
        question: "A person who is excessively fond of and collects books.",
        options: ["Bibliophile", "Pedestrian", "Egoist", "Somnambulist"],
        correct: 0 
    },
    {
        question: "A long, passionate, and vehement speech.",
        options: ["Valediction", "Harangue", "Filibuster", "Paradox"],
        correct: 1 
    },
    {
        question: "The occurrence of events by chance in a happy or beneficial way.",
        options: ["Serendipity", "Remorse", "Alchemy", "Banal"],
        correct: 0 
    },
    {
        question: "A person who thinks only of themselves and is preoccupied with their own interests.",
        options: ["Reticent", "Garrulous", "Egoist", "Eccentric"],
        correct: 2 
    },
    {
        question: "A person who walks in their sleep.",
        options: ["Somniloquist", "Pedestrian", "Agoraphobic", "Somnambulist"],
        correct: 3 
    }  
];

let num = 0;
let score = 0;

showQuest();


function showQuest() {
    
    if (num >= quizData.length) {
        showResult();
        return;
    }

    questionElement.innerText = `${num + 1}. ${quizData[num].question}`;

    optionButtons[0].innerText = quizData[num].options[0];
    optionButtons[1].innerText = quizData[num].options[1];
    optionButtons[2].innerText = quizData[num].options[2];
    optionButtons[3].innerText = quizData[num].options[3];
}

function checkAnswer(userChoice) {
    
    if (userChoice === quizData[num].correct) {
        score++;
    }
    num++;
    showQuest();
}
function showResult() {
    questionElement.innerText = "Quiz Completed! 🎉";
    optionsBox.style.display = "none"; 
    scoreCard.style.display = "block"; 
    finalScoreElement.innerText = `${score} / ${quizData.length}`;
}
function restart(){

    num = 0;
    score = 0;
    optionsBox.style.display = "flex"; 
    scoreCard.style.display = "none";
    questionElement.innerText = "";
    showQuest();

}
