export enum CardType {
    Blue = "blue",
    Red = "red",
    Bystander = "bystander",
    DoubleAgent = "double-agent",
    Assasin = "assasin"
} 
export class Card {
    word: string;
    type: CardType;
    revealed: boolean;
    constructor(word: string, type: CardType, revealed = false) {
        this.word = word;
        this.type = type;
        this.revealed = revealed;
    }

    reveal() {
        this.revealed = true;
    }
}