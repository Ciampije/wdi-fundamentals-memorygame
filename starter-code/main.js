//creates an array with four cards two queen two king
var cards = ['queen', 'queen', 'king', 'king'];

//creates an empty array for the card elements to fill
var cardsInPlay = [];

//function is inititiated at bottom of code
//creates the four cards on the screen
function createBoard() {
    
    //grabs the divs from the html with Id of game-board
	var fillBoard = document.getElementById('game-board');

	//loop that goes as long as the amount of items in the cards array
	for(var i=0; i<cards.length; i++){

		//creates a div in. variable called cardElement
		var cardElement = document.createElement('div');

		//makes the card elements class name card
		cardElement.className = 'card';

		//appends each card Element to the variable fillBoard
		fillBoard.appendChild(cardElement);

		//gives each card element an attribute of data-card
		cardElement.setAttribute('data-card', cards[i]);

		//waits for the user to click on the card
		//once the card is clicked the function isTwoCards is triggered
		cardElement.addEventListener('click', isTwoCards);

	}
}

//function to assign the attributes 
//also checks if there are two cards in play which triggers next function
function isTwoCards() {

	//pushes the data card attribute to the empty cardsInPlay array
	cardsInPlay.push(this.getAttribute('data-card'));

	//if statement to assign the appropriate picture to each element
	if (this.getAttribute('data-card') === 'king'){

		this.innerHTML = '<img src="king.jpg"/>';
	} else {

		this.innerHTML = '<img src="queen.png"/>';
	} 

	//if statement which checks if two cards are in play
	if (cardsInPlay.length === 2) {

		isMatch(cardsInPlay);

		//resets the cardsInPLay array to empty
		cardsInPlay = [];

	}

}

//function to see if the two cards clicked are a match or not
function isMatch() {

	//if statement to see if the 0th item in the array
	// is the same as the 1st
	if (cardsInPlay[0] === cardsInPlay[1]){

		alert("You have a match")
	}
	else{

		alert("No Match")
	}

	//sets a variable to every element that has a class 'card'
	var reset = document.getElementsByClassName('card');

	//for loop to go through the amount of cards 
	for(var j=0; j<cards.length; j++){

		//resets the image for the element so the 
		//board resets and the player can play again
		reset[j].innerHTML = '';
	}
	

}

createBoard();