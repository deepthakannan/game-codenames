import React from 'react';
import { Player, Team } from './Player'

class Players extends React.Component<{ players: Player[] }> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div>
                {"Blue Team"}
                {this.props.players.filter(player => player.team === Team.Blue).map(player => <div>{player.name}</div>)}
            </div>
            <div>
                {"Red Team"}
                {this.props.players.filter(player => player.team === Team.Red).map(player => <div>{player.name}</div>)}
            </div>
        </div>
    }
}

export default Players;