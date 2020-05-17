import React from 'react';
import GameBoard from './GameBoard'
import Players from './Players'
import Words from './words'
import Card from './Card';
import Player from './Player';
import Store from './Store'

class Game extends React.Component {
    static numberOfCards = 25;

    constructor(props) {
        super(props);
        this.words = new Words();
        this.types = {
            assasin: "ASSASSIN",
            doubleAgent:"DOUBLE AGENT",
            bystanders:"BYSTANDER",
            blue:"BLUE",
            red:"RED",
        };
        this.state = {
            wordCards: [],
            players: []
        };
    }

    async componentDidMount() {
        this.store = new Store(this.props.sessionId, this.gameDataUpdateHandler);
        const data = await this.store.get();
        if(data == null) {
            const words = this.assembleWords(this.words.getRandom(Game.numberOfCards));
            await this.store.upsert(words, this.state.players);
        } else {
            this.updateStateFromRawData(data.cards, data.players);
        }
    }

    render() {
        return <div>
                    <GameBoard wordCards={this.state.wordCards} onReveal={this.reveal} />
                    <Players players={this.state.players} />
                </div>     
    }

    gameDataUpdateHandler = (wordCards, players) => {
        this.updateStateFromRawData(wordCards, players);
    }

    updateStateFromRawData(wordCards, players) {
        this.setState({
            wordCards: wordCards.map(card => new Card(card.word, card.type, card.revealed)),
            players: players.map(player => new Player(player.name))
        });
    }

    reveal = (card) => {
        card.reveal();
        this.store.upsert(this.state.wordCards, this.state.players);
    }

    assembleWords(words) {
        console.log(words);
        const wordCards = [ new Card(words[0], this.types.assasin), new Card(words[1], this.types.doubleAgent) ];
        words.slice(2, 9).forEach(word => {
            wordCards.push(new Card(word, this.types.bystanders));
        });
        words.slice(9, 17).forEach(word => {
            wordCards.push(new Card(word, this.types.red));
        });
        words.slice(17, 25).forEach(word => {
            wordCards.push(new Card(word, this.types.blue));
        });
        this.shuffle(wordCards);
        return wordCards;
    }

    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
}

export default Game;