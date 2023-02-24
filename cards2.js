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
    case 2:
      return "2";
    case 3:
      return "3";
    case 4:
      return "4";
    case 5:
      return "5";
    case 6:
      return "6";
    case 7:
      return "7";
    case 8:
      return "8";
    case 9:
      return "9";
    case 10:
      return "10";
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
  return [dealCard(deck), dealCard(deck), dealCard(deck)];
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

let getWinner = function (player1, player2) {
  if (player1 === player2) {
    return "tie";
  } else if (
    (player1 === "Ace" && player2 === "King") ||
    (player1 === "Ace" && player2 === "Queen") ||
    (player1 === "Ace" && player2 === "Jack") ||
    (player1 === "Ace" && player2 === "10") ||
    (player1 === "Ace" && player2 === "9") ||
    (player1 === "Ace" && player2 === "8") ||
    (player1 === "Ace" && player2 === "7") ||
    (player1 === "Ace" && player2 === "6") ||
    (player1 === "Ace" && player2 === "5") ||
    (player1 === "Ace" && player2 === "4") ||
    (player1 === "Ace" && player2 === "3") ||
    (player1 === "Ace" && player2 === "2") ||
    (player1 === "King" && player2 === "Queen") ||
    (player1 === "King" && player2 === "Jack") ||
    (player1 === "King" && player2 === "10") ||
    (player1 === "King" && player2 === "9") ||
    (player1 === "King" && player2 === "8") ||
    (player1 === "King" && player2 === "7") ||
    (player1 === "King" && player2 === "6") ||
    (player1 === "King" && player2 === "5") ||
    (player1 === "King" && player2 === "4") ||
    (player1 === "King" && player2 === "3") ||
    (player1 === "King" && player2 === "2") ||
    (player1 === "King" && player2 === "1") ||
    (player1 === "Queen" && player2 === "Jack") ||
    (player1 === "Queen" && player2 === "10") ||
    (player1 === "Queen" && player2 === "9") ||
    (player1 === "Queen" && player2 === "8") ||
    (player1 === "Queen" && player2 === "7") ||
    (player1 === "Queen" && player2 === "6") ||
    (player1 === "Queen" && player2 === "5") ||
    (player1 === "Queen" && player2 === "4") ||
    (player1 === "Queen" && player2 === "3") ||
    (player1 === "Queen" && player2 === "2") ||
    (player1 === "Jack" && player2 === "10") ||
    (player1 === "Jack" && player2 === "9") ||
    (player1 === "Jack" && player2 === "8") ||
    (player1 === "Jack" && player2 === "7") ||
    (player1 === "Jack" && player2 === "6") ||
    (player1 === "Jack" && player2 === "5") ||
    (player1 === "Jack" && player2 === "4") ||
    (player1 === "Jack" && player2 === "3") ||
    (player1 === "Jack" && player2 === "2") ||
    (player1 === "10" && player2 === "9") ||
    (player1 === "10" && player2 === "8") ||
    (player1 === "10" && player2 === "7") ||
    (player1 === "10" && player2 === "6") ||
    (player1 === "10" && player2 === "5") ||
    (player1 === "10" && player2 === "4") ||
    (player1 === "10" && player2 === "3") ||
    (player1 === "10" && player2 === "2") ||
    (player1 === "9" && player2 === "8") ||
    (player1 === "9" && player2 === "7") ||
    (player1 === "9" && player2 === "6") ||
    (player1 === "9" && player2 === "5") ||
    (player1 === "9" && player2 === "4") ||
    (player1 === "9" && player2 === "3") ||
    (player1 === "9" && player2 === "2") ||
    (player1 === "8" && player2 === "7") ||
    (player1 === "8" && player2 === "6") ||
    (player1 === "8" && player2 === "5") ||
    (player1 === "8" && player2 === "4") ||
    (player1 === "8" && player2 === "3") ||
    (player1 === "8" && player2 === "2") ||
    (player1 === "7" && player2 === "6") ||
    (player1 === "7" && player2 === "5") ||
    (player1 === "7" && player2 === "4") ||
    (player1 === "7" && player2 === "3") ||
    (player1 === "7" && player2 === "2") ||
    (player1 === "6" && player2 === "5") ||
    (player1 === "6" && player2 === "4") ||
    (player1 === "6" && player2 === "3") ||
    (player1 === "6" && player2 === "2") ||
    (player1 === "5" && player2 === "4") ||
    (player1 === "5" && player2 === "3") ||
    (player1 === "5" && player2 === "2") ||
    (player1 === "4" && player2 === "3") ||
    (player1 === "4" && player2 === "2") ||
    (player1 === "3" && player2 === "2")
  ) {
    return "Chance";
  } else {
    return "Guest";
  }
};

let congratulate = function (winner) {
  if (winner === "tie") {
    cl("Nobody wins.");
  } else if (winner === "Guest") {
    cl("Congratulations, Guest!");
  } else {
    cl("Congratulations, you are the that GUY!");
  }
};

let winner = getWinner(player1, player2);
congratulate(winner);
