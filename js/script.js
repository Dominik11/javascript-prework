"use strict";
//global varss
let counter = 0;
let maxGameRounds = 0;
let computerPoints = 0;
let yourPoints = 0;

const setMaxGameRounds = function() {
  let gameNumber = parseInt(prompt("ile gier gramy?", 3));
  console.log(gameNumber);
  if (gameNumber && Number.isInteger(gameNumber) && gameNumber > 0 && gameNumber < 100){
    maxGameRounds = gameNumber;
  } else {
    setMaxGameRounds();
  }

};

function playGame(){
    setMaxGameRounds();
    if (counter === 0 && maxGameRounds === 0) {
      maxGameRounds = parseInt(prompt("ile gier gramy?", 3));
    }
  
  function generateRamdomNumber(){
    return Math.floor(Math.random() * 3 + 1);
  }
  
  function getMoveName(argMoveId){
    if(argMoveId === 1){
      return 'kamień';
    } else if(argMoveId === 2){
      return 'papier';
    } else if(argMoveId === 3){
      return 'nożyce';
    } else {
      console.log('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  

  

  function displayResult(argComputerMove, argPlayerMove){
    console.log('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    
     if (argComputerMove === argPlayerMove) {
      console.log('Remis, spróbuj jeszcze raz');
   } else if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
      yourPoints = ++yourPoints;
    console.log('Ty wygrywasz!');
   } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
      yourPoints = ++yourPoints;
    console.log('Ty wygrywasz!');
   } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
      yourPoints = ++yourPoints;
      console.log('Ty wygrywasz!');
   } else {
      computerPoints = ++yourPoints;
      console.log('Tym razem przegrywasz 😞');
   }
   function resetWyniku (){
    counter = 0;
    maxGameRounds = 0;
    computerPoints = 0;
    yourPoints = 0;
   }
   // porownanie wynikow
   if (counter >= maxGameRounds){
     if(yourPoints > computerPoints){
       console.log('wygrales globalnie')
     }
     if (computerPoints > yourPoints) {
       console.log('przegrales globalnie')
     }
     if (computerPoints === yourPoints) {
       console.log('remis globalnie')
     }
     resetWyniku();
     console.log(counter);
    }

  }
  
   function buttonClicked(buttonClicked){
    counter = ++counter;
    const randomNumber = generateRamdomNumber();

    let computerMove = getMoveName(randomNumber);
    console.log('komputer: ' + computerMove);

    let playerMove = getMoveName(buttonClicked);
    console.log('Wybrałem : ' + playerMove);

    displayResult(computerMove,playerMove)
  }
  
  let rockButton = document.getElementById('play-rock');
  
  rockButton.addEventListener('click',()=> buttonClicked(1));

  let paperButton = document.getElementById('play-paper');
  
  paperButton.addEventListener('click',()=> buttonClicked(2));

  let scissorsButton = document.getElementById('play-scissors');
  
  scissorsButton.addEventListener('click',()=> buttonClicked(3));
  
}
playGame();



