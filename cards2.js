let cl = console.log;
let buildDeck = function () {
  let deck = [];
  for (let index = 2; index <= 14; index++) {
    deck.push(createCard(index, "Hearts"));
    deck.push(createCard(index, "Spades"));
    deck.push(createCard(index, "Diamonds"));
    deck.push(createCard(index, "Clubs"));
  }
  return deck;
};

let createCard = function (rank, suit) {
  let card = {
    rank: rank,
    suit: suit,
    color: getColor(suit),
    name: getName(rank),
  };
  return card;
};

let getName = function (rank) {
  switch (rank) {
    case 11:
      return "Jack";
    case 12:
      return "Queen";
    case 13:
      return "King";
    case 14:
      return "Ace";
    default:
      return rank + "";
  }
};
let getColor = function (suit) {
  if (suit === "Clubs" || suit === "Spades") {
    return "black";
  } else {
    return "red";
  }
};

let deck = buildDeck();
console.table(deck);

let dealHand = function (deck) {
  return [
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
  ];
};

let dealCard = function (deck) {
  let index = Math.floor(Math.random() * deck.length);
  let card = deck.splice(index, 1)[0];
  return card;
};

let createPlayer = function (name) {
  return {
    name: name,
    hand: dealHand(deck),
    wins: 0,
  };
};

let player1 = createPlayer("Chance");
let player2 = createPlayer("Guest");

let sortByRank = function (hand) {
  return hand.sort(function (a, b) {
    return b.rank - a.rank;
  });
};

sortByRank(player1.hand);
sortByRank(player2.hand);

console.log(player1.hand[0], player2.hand[0]);

console.log(
  `${player1.name} has a ${player1.hand[0].name} of ${player1.hand[0].suit}`,
  `${player2.name} has a ${player2.hand[0].name} of ${player2.hand[0].suit}`
);

{
  if (player1.hand[0].rank > player2.hand[0].rank) {
    console.log("Chance wins!");
  } else if (player1.hand[0].rank < player2.hand[0].rank) {
    console.log("Guest Wins!");
  } else {
    console.log("tie!");
  }
}
