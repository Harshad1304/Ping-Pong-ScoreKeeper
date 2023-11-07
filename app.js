const p1btn = document.querySelector('#p1Button');
const p2btn = document.querySelector('#p2Button');
const playerOneDisplay = document.querySelector('#p1Display');
const playerTwoDisplay = document.querySelector('#p2Display');
const resetBtn = document.querySelector('#resetBtn');
const playToSelect = document.querySelector('#playTo');

let p1Score = 0; 
let p2Score = 0; 
let winScore = parseInt(playToSelect.value);  ;
let isGameOver = false;

p1btn.addEventListener('click', function(event){
    if(!isGameOver){
        p1Score += 1;

        if(p1Score === winScore){
            isGameOver = true;
            playerOneDisplay.classList.add('win');
            playerTwoDisplay.classList.add('lose');
        }
        playerOneDisplay.textContent = p1Score;
    }
    
})
p2btn.addEventListener('click', function(event){
    if(!isGameOver){
        p2Score += 1;

        if(p2Score === winScore){
            isGameOver = true;
            playerTwoDisplay.classList.add('win');
            playerOneDisplay.classList.add('lose');
        }
        playerTwoDisplay.textContent = p2Score;
    }
})

resetBtn.addEventListener('click',reset)

playToSelect.addEventListener('change', function(event){
    winScore = parseInt(this.value); 
    reset();
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    playerOneDisplay.textContent = p1Score; 
    playerTwoDisplay.textContent = p2Score;
    isGameOver = false;
    playerOneDisplay.classList.remove('win', 'lose');
    playerTwoDisplay.classList.remove('lose','win');

    }