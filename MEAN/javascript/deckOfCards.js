'esversion: 6';

class Card {
  constructor(val, suit, id) {
    this.val = val;
    this.suit = suit;
    this.id = id;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }
  inst() {
    this.deck = [];
    let suit = ['Diamonds', 'Spades', 'Clubs', 'Hearts'];
    let id = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    for (var i = 0; i < suit.length; i++) {
      for (var j = 0; j < id.length; j++) {
        let card = new Card(j + 1, suit[i], id[j]);
        if (card.val > 10) {
          card.val = 10;
        }
        this.deck.push(card);
      }
    }
    return this.deck;
  }
  shuffle() {
    for (var i = 0; i < 100; i++) {
      let index = Math.floor(Math.random() * this.deck.length);
      let temp = this.deck[index];
      this.deck[index] = this.deck[0];
      this.deck[0] = temp;
    }
  }
  deal() {
    return this.deck.shift();
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  take(deck) {
    let card = deck.deal();
    this.hand.push(card);
  }
  discard(card) {
    this.hand.splice(card - 1, 1)
  }
}


let deck = new Deck();
deck.inst();
console.log(deck);
