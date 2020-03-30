import React from 'react';

class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: props.players
        };
    }

    render() {
        return "Players";
    }
}

export default Players;