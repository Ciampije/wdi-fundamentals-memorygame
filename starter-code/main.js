var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];


function createBoard() {

	var fillBoard = document.getElementById('game-board');

	for(var i=0; i<cards.length; i++){

		var cardElement = document.createElement('div');

		cardElement.className = 'card';

		fillBoard.appendChild(cardElement);

		cardElement.setAttribute('data-card', cards[i]);

		cardElement.addEventListener('click', isTwoCards);

	}
}

function isTwoCards() {

	
	cardsInPlay.push(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king'){

		this.innerHTML = '<img src="king.jpg"/>';
	} else {

		this.innerHTML = '<img src="queen.png"/>';
	} 


	if (cardsInPlay.length === 2) {

		isMatch(cardsInPlay);

		cardsInPlay = [];

	}

}

function isMatch() {

	if (cardsInPlay[0] === cardsInPlay[1]){

		alert("You have a match")
	}
	else{

		alert("No Match")
	}
	var reset = document.getElementsByClassName('card');

	for(var j=0; j<cards.length; j++){

		reset[j].innerHTML = '';
	}
	

}

createBoard();