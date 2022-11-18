const usernameDisplay = document.querySelector("#username")
const choicesDisplay = document.querySelector("#choices")
const resultDisplay = document.querySelector("#result")
const choices = ["rock", "paper", "scissors"]

document.getElementById("nameButton").onclick = function() {
    var userName = document.getElementById("usernameInput").value;
    innerHTML.appendChild(value)
}
const handleClick = (e) => {
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}

choices.forEach(choice => {
    const button = document.createElement("button")
    button.innerHTML = choice
    button.addEventListener("click", handleClick)
    choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. It's a win!`
            break
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. It's a lost!`   
            break
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. It's a tie!`      
            break       
    }
}

