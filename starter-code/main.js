function createCards (){

	var fillBoard = document.getElementById('game-board');

	for(var i=0; i<4; i++){

		var cardElement = document.createElement('div');

		cardElement.className = 'card';

		fillBoard.appendChild(cardElement);
	}
}

createCards();