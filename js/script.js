function playGame(){
  

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

    if (argComputerMove === 'kamień' && argPlayerMove === 'papier'){
      console.log('Ty wygrywasz!');
    } if (argComputerMove === 'papier' && argPlayerMove === 'nożyce'){
      console.log('Ty wygrywasz!');
    } if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień'){
      console.log('Ty wygrywasz!');
    } if (argComputerMove === 'kamień' && argPlayerMove === 'kamień'){
        console.log('Remis, spróbuj jeszcze raz');
    } if (argComputerMove === 'papier' && argPlayerMove === 'papier'){
        console.log('Remis, spróbuj jeszcze raz');
    } if (argComputerMove === 'nożyce' && argPlayerMove === 'nożyce'){
        console.log('Remis, spróbuj jeszce raz');
    } else {
        console.log('Tym razem przegrywasz :(');
    }
  }
  
   function buttonClicked(buttonClicked){
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

