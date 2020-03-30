import React from 'react';

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionName: props.sessionName
        };
    }

    render() {
        return <p>GameBoard</p>;
    }
}

export default GameBoard;