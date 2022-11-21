const userChoiceDisplay = document.getElementById("yourscore");
const computerChoiceDisplay = document.getElementById("computerscore");
const resultDisplay = document.getElementsByClassName("result");
 //creating choices
 const choices = ["rock", "paper", "scissors"];
 let computerScore = 0;
 let playerWeapon = 0;
 let computerWeapon = 0;
 let playerScore = 0;
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
let randomChoice = choices[Math.floor(Math.random() * choices.length)]
const defaultName="Player";
userName.value=defaultName;

//logs entered name
function showName() {
    document.getElementById("namename").innerText = userName.value + " chose: ";
}


rockBtn.addEventListener("click", () => {
    if(playerScore != 3 && computerScore != 3)
    {
        
    
    playerWeapon = choices[0];
    computerWeapon = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("playerWeapon").innerText = `${userName.value} chose ${choices[0]}`

    if (computerWeapon === "paper") {
        computerScore++;
        document.getElementById("computerscore").innerText = `Computer score: ${computerScore}`
        document.getElementById("computerWeapon").innerText = "Computer chose paper"
    } else if (computerWeapon === "scissors") {
        playerScore++;
        document.getElementById("playerscore").innerText = `Player score: ${playerScore}`;
        document.getElementById("computerWeapon").innerText = "Computer chose scissors";
    } else {
        document.getElementById("computerWeapon").innerText = "Computer chose rock"
    }
    document.getElementById("playerscore").innerText = playerScore;
    document.getElementById("computerscore").innerText = computerScore;
    if (playerScore === 3) {
        document.getElementById("endresult").innerText = "You win!";
       // gameReset();
    }

    if (computerScore === 3) {
        document.getElementById("endresult").innerText = "You lose!:(";
       // gameReset();
    }
}

}); 

paperBtn.addEventListener("click", () => {
    if(playerScore != 3 && computerScore != 3)
    {
        
    
    playerWeapon = choices[1];
    computerWeapon = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("playerWeapon").innerText = `${userName.value} chose ${choices[1]}`

    if (computerWeapon === "rock") {
        playerScore++;
        document.getElementById("playerscore").innerText = `Player score: ${playerScore}`
        document.getElementById("computerWeapon").innerText = "Computer chose rock"
    } else if (computerWeapon === "scissors") {
        computerScore++;
        document.getElementById("computerscore").innerText = `Computer score: ${computerScore}`;
        document.getElementById("computerWeapon").innerText = "Computer chose scissors";
    } else {
        document.getElementById("computerWeapon").innerText = "Computer chose paper"
    }
    document.getElementById("playerscore").innerText = playerScore;
    document.getElementById("computerscore").innerText = computerScore;
    if (playerScore === 3) {
        document.getElementById("endresult").innerText = "You win!";
       // gameReset();
    }

    if (computerScore === 3) {
        document.getElementById("endresult").innerText = "You lose!:(";
       // gameReset();
    }
}

});

scissorsBtn.addEventListener("click", () => {
    if(playerScore != 3 && computerScore != 3)
    {
        
    
    playerWeapon = choices[2];
    computerWeapon = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("playerWeapon").innerText = `${userName.value} chose ${choices[2]}`

    if (computerWeapon === "paper") {
        playerScore++;
        document.getElementById("playerscore").innerText = `Player score: ${playerScore}`
        document.getElementById("computerWeapon").innerText = "Computer chose paper"
    } else if (computerWeapon === "rock") {
        computerScore++;
        document.getElementById("computerscore").innerText = `Computer score: ${computerScore}`;
        document.getElementById("computerWeapon").innerText = "Computer chose rock";
    } else {
        document.getElementById("computerWeapon").innerText = "Computer chose scissors"
    }
    document.getElementById("playerscore").innerText = playerScore;
    document.getElementById("computerscore").innerText = computerScore;
    if (playerScore === 3) {
        document.getElementById("endresult").innerText = "You win!";
       // gameReset();
    }

    if (computerScore === 3) {
        document.getElementById("endresult").innerText = "You lose!:(";
       // gameReset();
    }
}

}); 


/*
const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    //document.getElementById("computerscore").innerText = randomChoice
    var ul2 = document.getElementById("list2")
    var li2 = document.createElement("computerscore")
    li2.appendChild(document.createTextNode(randomChoice))
    ul2.appendChild(li2)
}

const handleClick = (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerText = userChoice
    generateComputerChoice()
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
*/


//when game is over
const reloadBtn = document.querySelector(".reload");


//reload button

reloadBtn.innerText = "Restart";
reloadBtn.addEventListener("click", () => {
    window.location.reload();
})
