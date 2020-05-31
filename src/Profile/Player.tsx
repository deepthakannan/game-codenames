import React from 'react';
import { PlayerData } from './PlayerData';
export class Player extends React.Component<{
    player: PlayerData;
}> {
    render() {
        return <div>
            {this.props.player.name}
        </div>;
    }
}
