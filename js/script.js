function playGame(){
  if(playerInput);

  function clearMessages();
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  /* if(randomNumber === 1){
    computerMove = 'kamień'; 
  }else if (randomNumber === 2){
    computerMove = 'papier';
  }else (randomNumber === 3){
     computerMove = 'nożyce';
  } 

  console.log('Mój ruch to: ' + ComputerMove);

  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);*/ 

  let playerMove = getMoveName(randomNumber);

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

  /* if(playerInput === '1'){
    playerMove = 'kamień';
  }else if(playerInput ==='2'){
    playerMove = 'papier';  
  }else if(playerInput ==='3'){
      playerMove = 'nożyce';
  } 

  console.log('Twój ruch to: ' + PlayerMove); */

  console.log('moves:', argComputerMove, argPlayerMove);

  function displayResult(argComputerMove, argPlayerMove){
    console.log('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if(argComputerMove === 'kamień' && argPlayerMove === 'papier'){
      console.log('Ty wygrywasz!');
    } else {
      console.log('Tym razem przegrywasz :(');
    } if( argComputerMove === 'papier' && argPlayerMove === 'nożyce'){
      console.log('Ty wygrywasz!');
    } else {
      console.log('Tym razem przegrywasz :(');
    } if( argComputerMove === 'nożyce' && argPlayerMove === 'kamień'){
      console.log('Ty wygrywasz!');
    } else {
      console.log('Tym razem przegrywasz :(');
    }
  }
  /* if( computerMove === 'kamień' && playerMove === 'papier'){
     console.log('Ty wygrywasz!');
    }else if(computerMove === 'papier' && playerMove === 'nożyce'){
     console.log('Ty wygrywasz!');
    }else if(computerMove === 'nożyce' && playerMove === 'kamień'){
      console.log('Ty wygrywasz!');
    }

  if( computerMove === 'kamień' && playerMove === 'kamień') {
      console.log('Remis');  
    } else if(computerMove === 'papier' && playerMove === 'papier'){
      console.log('Remis');  
    } else if(computerMove === 'nożyce' && playerMove === 'nożyce'){
      console.log('Remis');    
   } */
   function buttonClicked(){
    console.log('Wybrałeś ');
  }
  
  let testButton = document.getElementById('play-rock');
  
  testButton.addEventListener('click', buttonClicked);

  let testButton = document.getElementById('play-paper');
  
  testButton.addEventListener('click', buttonClicked);

  let testButton = document.getElementById('play-scissors');
  
  testButton.addEventListener('click', buttonClicked);
  
}

