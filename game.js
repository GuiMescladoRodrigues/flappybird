const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");
const gameContainer = document.getElementById('game-container');

const flappyImg = new Image();
flappyImg.src = 'assets/flappy_dunk.png';

// Game Constants
const FLAP_SPEED = -4.3;
const BIRD_WIDTH = 40;
const BIRD_HEIGHT = 30;
const PIPE_WIDTH = 50;
const PIPE_GAP = 60;




// Bird Variables
let birdX = 50;
let birdY = 50;
let birdVelocity = 0;
let birdAcceleration = 0.125;

// Pipe Variables
let pipeX = 400;
let pipeY = canvas.height - 200;


// Score and highScore variables
let scoreDiv = document.getElementById('score-display');
let score = 0;
let highScore = 0;

document.body.onkeyup = function(e) {
    if (e.code == 'Space') {
        birdVelocity = FLAP_SPEED;
    }
}


function increaseScore() {
    //TODO:
}

function collisionCheck() {
    //create bounding Boxes for the bird and the pipes

    
}

function hideEndMenu() {
    document.getElementById('end-menu').style.display = 'none';
    gameContainer.classList.remove('backdrop-blur');

}

function showEndMenu() {
    document.getElementById('end-menu').style.display = 'block';
    gameContainer.classList.add('backdrop-blur');
    document.getElementById('end-score').innerHTML = score;
}

function resetGame() {
    //TODO:
}

function endGame() {
    //TODO:
}

function loop() {
    //reset the ctx after every loop interation
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Flappy Bird
    ctx.drawImage (flappyImg, birdX, birdY);

    // Draw Pipes
    ctx.fillStyle = '#333';
    ctx.fillRect(pipeX, -100, PIPE_WIDTH, pipeY);
    ctx.fillRect(pipeX, pipeY + PIPE_GAP, PIPE_WIDTH, canvas.height - pipeY);

    //add collision check to display our end-menu
    // and end the game
    if (collisionCheck()){
        endGame()
        return;
    }


    // forgot to move the pipes
    if (score < 5){
        pipeX -= 1.5;
    } else if( score < 10){
        pipeX -= 2;
    }
    // reset pipes
    if (pipeX < -5){
        pipeX = 400;
        pipeY = Math.random() * (canvas.height - PIPE_GAP) + PIPE_WIDTH;
    }


    // Apply gravity to the bird and let it move  
    birdVelocity += birdAcceleration;
    birdY += birdVelocity;

    requestAnimationFrame(loop);

}

loop();
