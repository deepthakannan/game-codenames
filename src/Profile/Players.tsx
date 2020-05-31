import React from 'react';
import { PlayerData, Team } from './PlayerData'
import { Player } from './Player';

const TeamTitle = (props) => {
    return <h2>
        {props.team}
    </h2>
}

class Players extends React.Component<{ players: PlayerData[] }> {
    constructor(props) {
        super(props);
    }

    render() {
        const blueTeamPlayers = this.props.players.filter(player => player.team === Team.Blue);
        const redTeamPlayers = this.props.players.filter(player => player.team === Team.Red);
        return <div style={{display: "flex"}}>
            {TeamBoard(blueTeamPlayers, Team.Blue)}
            {TeamBoard(redTeamPlayers, Team.Red)}
        </div>
    }
}

export default Players;

function TeamBoard(teamPlayers: PlayerData[], team: Team) {
    return <div style={{background: "white", opacity: "0.4", margin: "10px", padding: "10px", borderRadius: 10}}>
        <TeamTitle team={`${team.toString()} Team`} />
        {teamPlayers.map(player => <Player player={player} />)}
    </div>;
}
