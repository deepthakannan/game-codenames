import React from 'react';
import GameBoard from './GameBoard'
import Players from './Players'
import Words from './words'
import { Card, CardType } from './Card';
import Player from './Player';
import Store from './Store'

type GameProps = { sessionId: string };
type GameState = { wordCards: [], players: [] };

class Game extends React.Component<GameProps, GameState> {
    static numberOfCards = 25;
    words: Words;
    types: { assasin: string; doubleAgent: string; bystanders: string; blue: string; red: string; };
    store: Store;

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
        this.store = new Store(this.props.sessionId, this.gameDataUpdateHandler);
    }

    async componentDidMount() {
        
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
        this.store!.upsert(this.state.wordCards, this.state.players);
    }

    assembleWords(words) {
        console.log(words);
        const wordCards = [ new Card(words[0], CardType.Assasin), new Card(words[1], CardType.DoubleAgent) ];
        words.slice(2, 9).forEach(word => {
            wordCards.push(new Card(word, CardType.Bystander));
        });
        words.slice(9, 17).forEach(word => {
            wordCards.push(new Card(word, CardType.Red));
        });
        words.slice(17, 25).forEach(word => {
            wordCards.push(new Card(word, CardType.Blue));
        });
        return wordCards;
    }
}

export default Game;