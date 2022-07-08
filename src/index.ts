type Deck = NormalCard[];

enum Color {
    heart = "♥",
    spade = "♠",
    club = "♣",
    diamond = "♦"
}

enum Mark {
    ace = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    joke = "J",
    queen = "Q",
    king = "K"
}

type NormalCard = {
    color: Color,
    mark: Mark
}

function createDeck(): Deck {
    const deck: Deck = [];
    const color = Object.values(Color);
    const mark = Object.values(Mark);
    for (const itemColor of color) {
        for (const itemNumber of mark) {
            deck.push({
                color: itemColor,
                mark: itemNumber
            })
        }
    }
    return deck;
}

function printDeck(deck: Deck) {
    let result = "\n";
    deck.forEach((card, index) => {
        let str = card.color + card.mark;
        result += str + "\t";
        if ((index + 1) % 4 === 0) {
            result += "\n"
        }
    })
    console.log(result);
}

const deck = createDeck();
printDeck(deck);
