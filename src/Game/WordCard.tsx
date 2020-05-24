import React from 'react';
import { Card, CardType } from './Card';
import classNames from 'classnames';

class WordCard extends React.Component<{ card: Card, onReveal: (card: Card) => void }> {

    render() {
        var cardClass = classNames({
            'card': true,
            [this.props.card.type.toLowerCase()]: this.props.card.revealed,
            'unrevealed': !this.props.card.revealed
        });

        return <div className={cardClass} onDoubleClick={this.onReveal}>
            {!this.props.card.revealed && <div className="word">
                {this.props.card.word}
            </div>}
        </div>;
    }

    onReveal = async () => {
        console.log(this.props.card);
        this.props.onReveal(this.props.card);
    }
}

export default WordCard;