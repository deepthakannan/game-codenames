import React from 'react';
import WordCard from './WordCard';

type GameBoardProps = { wordCards: [], onReveal: (card: WordCard) => void };
type GameBoardState = { sessionName: string }
class GameBoard extends React.Component<GameBoardProps, GameBoardState> {
    constructor(props) {
        super(props);
        this.state = {
            sessionName: props.sessionName
        };        
    }

    render() {
        return <div className="gameBoard">
            <div className="gameTileRow">
                {this.props.wordCards.slice(0, 5).map(card => this.createCard(card))}
            </div>
            <div className="gameTileRow">
            <div className="gameTileRow">
                {this.props.wordCards.slice(5, 10).map(card => this.createCard(card))}
            </div>
            </div>
            <div className="gameTileRow">
            <div className="gameTileRow">
                {this.props.wordCards.slice(10, 15).map(card => this.createCard(card))}
            </div>
            </div>
            <div className="gameTileRow">
            <div className="gameTileRow">
                {this.props.wordCards.slice(15, 20).map(card => this.createCard(card))}
            </div>
            </div>
            <div className="gameTileRow">
                {this.props.wordCards.slice(20, 25).map(card => this.createCard(card))}
            </div>
        </div>;
    }

    revealCard = (card) => {
        this.props.onReveal(card);
    }

    createCard(card) {
        return <WordCard key={card.word} card={card} onReveal={this.revealCard} />;
    }
}

export default GameBoard;