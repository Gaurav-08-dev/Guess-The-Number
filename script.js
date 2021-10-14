'use strict';

const secret = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent;

let score = 20;
let highScore = 0;
const displayMessage= function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number to match');
  } 
  
  else if (guess === secret) {
    displayMessage('You guessed it correct');
    document.querySelector('body').style.backgroundColor = 'green';
    score++;
    document.querySelector('.score').textContent = score;
    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
  } 
  
  else if (guess !== secret) {
      document.querySelector('body').style.backgroundColor='#222';
    if (score > 0) {
      guess > secret
        ? displayMessage('your guess was greater')
        : displayMessage('your guess was smaller');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
        displayMessage('you lost');
    }
  }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.highscore').textContent=0;
    Math.trunc(Math.random()* 20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
});