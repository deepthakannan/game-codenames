import React from 'react';
import GameBoard from './GameBoard'
import Players from './Players'
import SessionPicker from './SessionPicker'
import Words from './words'
import Card from './Card';

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
            sessionName: props.sessionName ?? "Test",
            wordCards: this.assembleWords(this.words.getRandom(Game.numberOfCards))
        };
    }

    handleSessionSubmit = (sessionName) => {
        this.setState({
            sessionName: sessionName
        })
    }

    render() {
        if (this.state.sessionName) {
            return <div>
                        <GameBoard wordCards={this.state.wordCards} />
                        <Players />
                </div> 
        }
        return <SessionPicker onSessionSubmit={this.handleSessionSubmit} />
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