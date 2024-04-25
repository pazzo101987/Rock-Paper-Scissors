const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let choices = ["Rock", "Paper", "Scissors"];
let output;
let scores = [0, 0];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playGame);
}
function playGame(e) {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  //   console.log(`Computer choice is : ${computerChoice}`);
  let playerChoice = e.target.innerText;
  //   console.log(`Player choice is : ${playerChoice}`);
  if (computerChoice === playerChoice) {
    output = "It's a Tie!";
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    scores[1]++;
    output = "Computer Win !";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    scores[0]++;
    output = "Player Win !";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    scores[0]++;
    output = "Player Win !";
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    scores[1]++;
    output = "Computer Win !";
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    scores[1]++;
    output = "Computer Win !";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    scores[0]++;
    output = "Player Win !";
  }
  message.innerText = `Player choice is : ${playerChoice}
                   Computer choice is : ${computerChoice} 
                   The result is :${output}
                   `;
  score.innerText = `Player: ${scores[0]} & Computer: ${scores[1]}`;
}
