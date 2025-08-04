let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorep=document.querySelector("#user");
const compScorep=document.querySelector("#comp");

const gameCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        console.log("You win");
        msg.innerText=`You win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="black";
        userScore++;
        userScorep.innerText=userScore;
    } else {
        console.log("You lost");
        compScore++;
        compScorep.innerText=compScore;
        msg.innerText=`You lost!! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="black";
    
    }
    console.log(`User Score: ${userScore}, Computer Score: ${compScore}`);
};

const draw = () => {
    console.log("Game was a draw");
    msg.innerText="Game draw!";
    msg.style.backgroundColor="blue";
    msg.style.color="black";
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = gameCompChoice();
    console.log("Computer choice =", compChoice);
    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

