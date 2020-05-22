import React from 'react';
import Player from './Player'

class Players extends React.Component<{ players: Player[] }> {
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