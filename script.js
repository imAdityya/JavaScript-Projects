let  userScore = 0;
let  compScore = 0;

let choices = document.querySelectorAll('.choice');

let msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-scr');
const compScorePara = document.querySelector('#comp-scr');

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = 'green';
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;;
    msg.style.backgroundColor = 'red';
  }
}
const drawGame = () => {
  console.log('draw');
  msg.innerText = 'Draw, Play Again';
  msg.style.backgroundColor = '#272838';
}
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
}

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock"){
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
  } else if (userChoice === "paper"){
    //rock, scissors
    userWin = compChoice === "scissors" ? false : true;
    } else {
    //paper, rock
    userWin = compChoice === "rock" ? false : true;
    } 
    showWinner(userWin, userChoice, compChoice);
}
}



  
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  })
})
