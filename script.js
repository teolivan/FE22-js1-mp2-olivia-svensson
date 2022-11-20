const userChoiceDisplay = document.getElementById("yourChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementsByClassName("result");

//logs entered name
function showName() {
    document.getElementById("namename").innerText = userName.value + "'s";
}

const choices = ["rock", "paper", "scissors"];

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.innerHTML = choices[0]; 
paperBtn.innerHTML = choices[1]; 
scissorsBtn.innerHTML = choices[2]; 

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    document.getElementById("computerScore").innerText(randomChoice)
}

const handleClick = (handleClickEvt) => {
    console.log(handleClickEvt.target.id)
}


rockBtn.addEventListener("click", handleClick)
paperBtn.addEventListener("click", handleClick)
scissorsBtn.addEventListener("click", handleClick)
 
//game rules
const gameGame = (player, computer) => {
if (player === rock && computer === rock) {
    document.getElementById("result").innerHTML("<h1>it's a tie!</h1>");
}
}


//when game is over
const reloadBtn = document.querySelector(".reload");


//reload button

reloadBtn.innerText = "Restart";
reloadBtn.addEventListener("click", () => {
    window.location.reload();
})
