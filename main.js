

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamods",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
			} else {
		alert("Sorry, try again.");
		}	
}

var flipCard = function(cardId){

console.log("User flipped " + cards[cardId].rank);

console.log(cards[cardId].cardImage);

cardsInPlay.push(cards[cardId].rank);

console.log(cards[cardId].suit);

checkForMatch();

};

flipCard(0);
flipCard(2);

