function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
    let computerMove = `kamień`;

    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
    let playerMove = 'papier'
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}