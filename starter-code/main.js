console.log("JS file is connected to HTML! Woo!")
/*
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';
*/
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
/*
if (cardThree == cardFour) {
	alert("you found a match");
}
else {
	alert("Sorry, try again");
}
if (cardOne == cardTwo) {
	alert ("You found a match");
}
else {
	alert ("Sorry, try again");
}
if (cardOne == cardThree) {
	alert ("You found a match");
}
else {
	alert ("Sorry, try again")
}
*/
function isMatch(cards) {
	if (cards[0] == cards[1]) {
		alert("It's a match");
	}
	else {
		alert("Sorry, try again");
	}
}
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') == "king") {
		this.innerHTML = '<img src="KH.png" alt="King of Spades" />';	
	} 
	else {
	this.innerHTML = '<img src="queen-spades.png" alt="Queen of hearts" />';	
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
var createBoard = function () {
	var gameBoard = document.getElementById("game-board");
	for (var i=0; i < cards.length; i++) {
		var cardDiv = document.createElement("div");
		cardDiv.className = "card";
		cardDiv.setAttribute('data-card', cards[i]);
		cardDiv.addEventListener('click', isTwoCards);
		gameBoard.appendChild (cardDiv);
	}
}
createBoard ();