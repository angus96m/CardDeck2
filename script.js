const SUITS = ['♣', '♦', '♥', '♠'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value
    }
}

class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

const deck = new Deck()

console.log(deck.cards)