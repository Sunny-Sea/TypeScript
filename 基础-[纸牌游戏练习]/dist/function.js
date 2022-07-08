Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createDeck = void 0;
const enum_1 = require("./enum");
function createDeck() {
    const deck = [];
    const color = Object.values(enum_1.Color);
    const mark = Object.values(enum_1.Mark);
    for (const itemColor of color) {
        for (const itemNumber of mark) {
            deck.push({
                color: itemColor,
                mark: itemNumber
            });
        }
    }
    return deck;
}
exports.createDeck = createDeck;
function printDeck(deck) {
    let result = "\n";
    deck.forEach((card, index) => {
        let str = card.color + card.mark;
        result += str + "\t";
        if ((index + 1) % 4 === 0) {
            result += "\n";
        }
    });
    console.log(result);
}
exports.printDeck = printDeck;
