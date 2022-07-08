import {Deck} from './type'
import {Color, Mark} from './enum'

export function createDeck(): Deck {
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

export function printDeck(deck: Deck) {
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