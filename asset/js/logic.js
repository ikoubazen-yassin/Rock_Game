// Set Initial Data or Value
let playerScore = 0;
let computerScore = 0;
// Import Displays Elements
const Player_score_Display = document.querySelector('.player_score');
const Computer_score_Display = document.querySelector('.computer_score');
const result_Display = document.querySelector('.result');

// Array Of Choices
/* 
Desc : Why I Use Array : becouse i want to generate a random indexes that translte my needs
Also  allow me , Get Computer Choie Auto.
*/
const Choices = ['rock', 'paper', 'scissors'];
// Add Event On Each Btn
/* 
desc : Firstly Each Btn Iknows their values
1- Rock 
2- Paper
3- Scissors
-- When I click on someone automaticly asend his value to play game Func
*/
document.getElementById('rock').addEventListener('click', () => PlayGame('rock'));
document.getElementById('paper').addEventListener('click', () => PlayGame('paper'));
document.getElementById('scissors').addEventListener('click', () => PlayGame('scissors'));


// play Game
/* 
desc : 
ان هده الدالة تقوم بنفس دور داك رالونج ديال الكهرباء.تقوم برط جميع الدوال مع بعضهم البعض وجعلهم قوة واحدة
*/
const PlayGame = (player_Choice) => {
   
    const computerChoice = GetComputerChoice();
    const winner = GetWinner(player_Choice, computerChoice);
    
    display_Result(player_Choice, computerChoice, winner);
    updateScore(winner);
}
// get Computer Choice (clear no need to explan)
const GetComputerChoice = () => {
    const randoIndex = Math.floor(Math.random() * Choices.length);
    return Choices[randoIndex];
    
}

// getWinner 
/* 
 I use Worst Case and Best Case Algorithms tips
 worst case : the bad option or user behavior its Draw 1-1 / 0-0
 Best case : Make Player/User Is The Winner set all Possible case
 than all of that , Return the Player value if he won else Computer
 -- Depanding On The Return Value i take action like add +1 to the winner result 
*/
const GetWinner = (player, computer) => {
    // Check If Draw
    if (player === computer) {
        return 'Draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
       ( player === 'scissors' && computer === 'paper' )||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
 
}


// displayResults
/* 
Exactle This Function Admin Of DOM it thing that make doc dynamic without refrech page
Also It Depande ON Winner Func tO Take Action
*/
const display_Result = (p, c, w) => {
    if (w === 'Draw')
    {
        return result_Display.innerHTML = 'Its Draw';
    } else if (w === 'Player') {
        return result_Display.innerHTML = `You Win, ${p} beat ${c},Player Won`;
    } else if (w === 'Computer') {
        return result_Display.innerHTML = `You Lose, ${c} beat ${p},Computer Won!`;
    }
}


// update Score
// This Jus Make Update On Init Value And export it to the page
const updateScore = (win) => {
    if (win === 'Draw') {
        
    } else if (win === 'Player') {
        playerScore++;
        Player_score_Display.innerHTML = `Player Score : ${playerScore}`;
    } else {
        computerScore++;
        Computer_score_Display.innerHTML = `Computer Score : ${computerScore}`;
    }
}
// Count Down Function
/* Another Feature That Make Round Been More Hard / Deffecult */
const count_Down = () => {
    //countdown
    let countdown = document.querySelector('.countDown');
    // set handeler
    handeler = setInterval(() => {
        // each Second Decreas -1
        countdown.innerHTML -= 1;
        // and check if == 0
        if (countdown.innerHTML == '0') {
            // Stop Decearsing / clear Interval
            clearInterval(handeler);
            // viod game Over
            Game_Over();
         
        };
    }, 1000);
}

// Game Over Function
const Game_Over  = () => {
    // Toglle Overlay 
    let overlay = document.querySelector('.overlay');
 
    // change display style
    overlay.style.display = 'block';
    // player Result
    document.querySelector('.overlay .popup .result_general .player').innerHTML = `player: ${playerScore}`;
    document.querySelector('.overlay .popup .result_general .computer').innerHTML = `computer: ${computerScore}`;
    // get winner
        let WinPop;
        if (playerScore === computerScore) {
          WinPop = 'No One';
        } else if (playerScore > computerScore || computerScore < playerScore) {
           WinPop = 'Player';
        } else {
           WinPop = 'Computer';
        }
    document.querySelector('.overlay .popup .winner-popup').innerHTML = `Winner Is : ${WinPop}`;
 
}
// Last Function Reset All
const resetAll = () => {
    // Simply Relode The Page 
    window.location.reload();
}
// Run Timer
count_Down();


