export default class Card {
    word: string;
    type: string;
    revealed: boolean;
    constructor(word: string, type: string, revealed = false) {
        this.word = word;
        this.type = type;
        this.revealed = revealed;
    }

    reveal() {
        this.revealed = true;
    }
}