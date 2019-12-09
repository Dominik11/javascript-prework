"use strict";
//global varss
let winPoints = 0;
let computerPoints = 0;
let yourPoints = 0;

const KAMIEN = 'kamień';
const PAPIER = 'papier';
const NOZYCE = 'nożyce';

function setMaxGameRounds() {
    const points = parseInt(prompt("Do ilu gramy?", 3));

    if (points && Number.isInteger(points) && points > 0 && points < 100) {
        winPoints = points;
    } else {
        setMaxGameRounds();
    }
}

function playGame() {
    setMaxGameRounds();

    function generateRamdomNumber() {
        return Math.floor(Math.random() * 3 + 1);
    }

    function getMoveName(argMoveId) {
        let moveName;

        switch (argMoveId) {
            case 1:
                moveName = KAMIEN;
                break;
            case 2:
                moveName = PAPIER;
                break;
            case 3:
                moveName = NOZYCE;
                break;
            default:
                console.log('Nie znam ruchu o id ' + argMoveId + '.');
                moveName = 'nieznany ruch';
                break;
        }

        return moveName;
    }

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argComputerMove === argPlayerMove) {
            console.log('Remis, spróbuj jeszcze raz');
        } else if (argComputerMove === KAMIEN && argPlayerMove === PAPIER) {
            yourPoints++;
            console.log('Ty wygrywasz!');
        } else if (argComputerMove === PAPIER && argPlayerMove === NOZYCE) {
            yourPoints++;
            console.log('Ty wygrywasz!');
        } else if (argComputerMove === NOZYCE && argPlayerMove === KAMIEN) {
            yourPoints++;
            console.log('Ty wygrywasz!');
        } else {
            computerPoints++;
            console.log('Tym razem przegrywasz 😞');
        }

        function resetGame() {
            winPoints = 0;
            computerPoints = 0;
            yourPoints = 0;
            setMaxGameRounds();
        }

        console.log(`TY: ${yourPoints}, KOMPUTER: ${computerPoints}`);

        //SPRAWDZENIE KTO WYGRAŁ tzn. kto pierwszy osiągną wartość winPoints
        if (yourPoints === winPoints) {
            console.log('#######################################################');
            console.log('wygrales globalnie');
            console.log('#######################################################');
            resetGame();
        }

        if (computerPoints === winPoints) {
            console.log('#######################################################');
            console.log('przegrales globalnie');
            console.log('#######################################################');
            resetGame();
        }

        console.log('#######################################################');
    }

    function buttonClicked(buttonClicked) {
        const randomNumber = generateRamdomNumber();

        const computerMove = getMoveName(randomNumber);
        console.log('komputer: ' + computerMove);

        const playerMove = getMoveName(buttonClicked);
        console.log('Wybrałem : ' + playerMove);

        displayResult(computerMove, playerMove)
    }

    document.getElementById('play-rock').addEventListener('click', function () {
        buttonClicked(1)
    });

    document.getElementById('play-paper').addEventListener('click', function () {
        buttonClicked(2)
    });

    document.getElementById('play-scissors').addEventListener('click', function () {
        buttonClicked(3)
    });
}

playGame();



