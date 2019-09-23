//Set variables

let randomCard = Math.floor(Math.random() * 3) + 1;

let name = 'Player';

const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const win = document.querySelector('#win');

const result = document.querySelector('#result');

let playerPoints = 0;
let cpuPoints = 0;

const displayPlayer = document.querySelector('#playerPoints');
const displayCpu = document.querySelector('#cpuPoints');

if (localStorage.getItem('totalVictory') === null) {
    localStorage.setItem('totalVictory', 0)
}

let totalWin = localStorage.getItem('totalVictory');
let total = Number(totalWin);

//Set functions
win.textContent = 'Total win : ' + totalWin;

function game(id) {

    let cardId = id;

    if (cardId === 'card1') {

        if (randomCard === 1) {
            alert('Rock vs Rock\n No winners');
        } else if (randomCard === 2) {
            alert('Rock vs Paper\n CPU wins');
            cpuPoints++;
        } else if (randomCard === 3) {
            alert('Rock vs Scissors\n You win');
            playerPoints++;
        };

    } else if (cardId === 'card2') {

        if (randomCard === 1) {
            alert('Paper vs Rock\n You win')
            playerPoints++;
        } else if (randomCard === 2) {
            alert('Paper vs Paper\n No winners')
        } else if (randomCard === 3) {
            alert('Paper vs Scissors\n CPU wins')
            cpuPoints++;
        };

    } else if (cardId === 'card3') {

        if (randomCard === 1) {
            alert('Scissors vs Rock\n CPU wins')
            cpuPoints++;
        } else if (randomCard === 2) {
            alert('Scissors vs Paper\n You win')
            playerPoints++;
        } else if (randomCard === 3) {
            alert('Scissors vs Scissors\n No winners')
        };
    };

    randomCard = Math.floor(Math.random() * 3) + 1;
    displayPlayer.textContent =  name + ' points : ' + playerPoints;
    displayCpu.textContent = 'CPU points : ' + cpuPoints;

    if (playerPoints === 3 || cpuPoints === 3) {
        if (playerPoints > cpuPoints) {
            result.textContent = name + ' wins ! Congratulations !';
            total += 1;
            localStorage.setItem('totalVictory', total);
            win.textContent = 'Total win : ' + localStorage.getItem('totalVictory');
        } else {
            result.textContent = 'You loose ! Try again !';
        };
        
        GameOver()
    };
};

function GameOver() {
    card1.disabled = true;
    card2.disabled = true;
    card3.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
};

function resetGame() {
    randomCard = Math.floor(Math.random() * 3) + 1;
    playerPoints = 0;
    cpuPoints = 0;
    displayPlayer.textContent = name + ' points : ' + playerPoints;
    displayCpu.textContent = 'CPU points : ' + cpuPoints;
    result.textContent = 'Wait your choice...';
    resetButton.parentNode.removeChild(resetButton);
    card1.disabled = false;
    card2.disabled = false;
    card3.disabled = false;
};


function changeName() {
    name = prompt("Choose your name");
    if (name === null || name === false || name === "") {
        name = 'Player';
    };
    displayPlayer.textContent =  name + ' points : ' + playerPoints;
};

/*

1 = Rock
2 = paper
3 = scissors

*/