import React from 'react';

class WordCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="card" onDoubleClick={this.onReveal}>
            {this.props.card.revealed && this.props.card.type}
            <div>{this.props.card.word}</div>
        </div>;
    }

    onReveal = async () => {
        console.log(this.props.card);
        this.props.onReveal(this.props.card);
    }
}

export default WordCard;