export default class Card {
    constructor(word, type, revealed = false) {
        this.word = word;
        this.type = type;
        this.revealed = revealed;
    }

    reveal() {
        this.revealed = true;
    }
}