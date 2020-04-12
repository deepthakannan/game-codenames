import React from 'react';

class WordCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            played: false
        };
    }

    render() {
        return <div className="card" onDoubleClick={this.reveal}>
            {this.state.played && this.props.card.type}
            <div>{this.props.card.word}</div>
        </div>;
    }

    reveal = () => {
        console.log(this.props.card);
        this.setState({
            played: true
        });
    }

    


}

export default WordCard;