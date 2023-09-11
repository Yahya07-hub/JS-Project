let userScore = 0;
let computerScore = 0;
let userScore_Span = document.getElementById('userscore');
let compScore_Span = document.getElementById('compscore');
let scoreBoard = document.querySelector('.score-board');

let choices = document.querySelectorAll('.choice');
let resultText = document.getElementById('resultText');

let rockBtn = document.getElementById('rock');
let papperBtn = document.getElementById('paper');
let scissorBtn = document.getElementById('scissors'); 

let resetButton = document.getElementById('reset');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        let playerChoice = choice.id;
        let computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        // showResult(winner, computerChoice); 
    });
});

let getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function getWinner(playerChoice, computerChoice) {   
    if (playerChoice === computerChoice) {
        resultText.textContent = `It's a tie! Computer chose ${computerChoice}`;
        document.getElementById(playerChoice).classList.add('grey-glow');
        setTimeout(() => {
            document.getElementById(playerChoice).classList.remove('grey-glow')
        }, 500);
        
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        userScore_Span.innerHTML =userScore
        userScore_Span.style.color = 'blue'
        resultText.textContent = `You win! Computer chose ${computerChoice}`;
        document.getElementById(playerChoice).classList.add('green-glow');
        setTimeout(() => {
            document.getElementById(playerChoice).classList.remove('green-glow')

        }, 500);

    } else {
        computerScore++;
        compScore_Span.innerHTML = computerScore;
        compScore_Span.style.color = 'red'
        resultText.textContent = `Computer wins! Computer chose ${computerChoice}`;
        document.getElementById(playerChoice).classList.add('red-glow');
        // document.getElementById(resultText).classList.add('bounce');
        setTimeout(() => {
            document.getElementById(playerChoice).classList.remove('red-glow')
        }, 500);
        
    }
    if (userScore === 10 && computerScore < 10) {
        startConfetti();
        resultText.textContent = `You win! Hahaha Sucker!`   
        resultText.style.color = 'green'
        rockBtn.disabled = true;
        papperBtn.disabled = true;
        scissorBtn.disabled = true;     

    } else if (computerScore === 10 && userScore < 10) {
        resultText.textContent = `Computer win! wanna Try your luck again?`
        resultText.style.color = 'red'
        rockBtn.disabled = true;
        papperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
}

resetButton.addEventListener('click', () =>{
    stopConfetti();
    removeConfetti();
    userScore = 0
    computerScore = 0;
    userScore_Span.innerHTML = userScore
    compScore_Span.innerHTML = computerScore
    userScore_Span.style.color= 'black'
    compScore_Span.style.color= 'black'
    resultText.textContent = 'Choose Your Weapon!'
    resultText.style.color = 'black'
    rockBtn.disabled = false;
    papperBtn.disabled = false;
    scissorBtn.disabled = false;
})

// function showResult(winner, computerChoice) {
//     resultText.textContent = `${winner} Computer chose ${computerChoice}.`;

//     // resultText.style.animation = 'bounce 0.3s linear alternate';
//     // resultText.style.animation = 
// }
