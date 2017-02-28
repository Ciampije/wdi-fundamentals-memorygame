//console.log("JS file is connected to HTML! Woo!")

//var cardOne = "queen"
//var cardTwo = "queen"
//var cardThree = "king"
//var cardFour = "king"

/*if (cardTwo === cardFour){

	alert('You found a match!');
}
else if (cardOne === cardFour){

	alert('You found a match!');
}
else if (cardThree === cardFour){

	alert('You found a match!');
}
else if (cardTwo === cardThree){

	alert('You found a match!');
}
else if (cardTwo === cardOne){

	alert('You found a match!');
}*/


var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

var createBoard = function (){



		for (i = 0; i < cards.length; i++){

			//creates 4 total cards as divs
			var cardElement = document.createElement('div');

            // sets a class for each card called "card"
			cardElement.className = 'card'
  
            //sets each attribute as "queen" or "king"
			cardElement.setAttribute('data-card', cards[i]);

            //waits for the user to click the card then triggers 
            //the function isTwoCards()
			cardElement.addEventListener('click', isTwoCards)

            // appends each card element to the board
			board.appendChild(cardElement);

			

		}

		
}



var isTwoCards = function(){

	cardsInPlay.push(this.getAttribute('data-card'));


	if (this.getAttribute('data-card') === 'king'){

	this.innerHTML = '<img src="king.png" />';

	} else {

	this.innerHTML = '<img src= "queen.png" />';
	}


	if (cardsInPlay.length === 2){

		isMatch(cardsInPlay);

		cardsInPlay = [];
	}

}

var isMatch = function(cards){

	if (cards[0] === cards[1]){

		alert("Its a Match");

	}else {

		alert("No Match");
	}

	removeAttribute.innerHTML(cards);
}


createBoard();
