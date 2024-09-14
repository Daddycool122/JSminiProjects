let randomNum = parseInt(Math.random()*100+1)
const submitButton=document.querySelector("#subt")
const userInput=document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submitButton.addEventListener("click",function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        alert("Please enter a valid number from 1-100")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game over, Random number was: ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNum){
        displayMessage(`You won! The number was ${randomNum}`)
        endGame()
    } 
    else if(guess<randomNum){
        displayMessage("Too low!")
    }
    else if(guess>randomNum){
        displayMessage("Too high!")
    }
}

function displayGuess(guess){
    userInput.value =''
    guessSlot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame() { 
    userInput.value=""
    userInput.setAttribute("disabled","")
    p.classList.add('button')
    p.innerHTML=`<h2 id = "newGame"> Start new game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame();
}

function newGame(){
        const newGame =document.querySelector("#newGame")
        newGame.addEventListener("click", function(e){
            randomNum = parseInt(Math.random()*100+1)
            prevGuess = []
            numGuess = 1
            guessSlot.innerHTML = ""
            remaining.innerHTML = `${11-numGuess}`;
            userInput.removeAttribute("disabled")
            startOver.removeChild(p)
            
            playGame=true
        })
    }   

