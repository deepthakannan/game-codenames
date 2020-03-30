import React from 'react';
import GameBoard from './GameBoard'
import Players from './Players'
import SessionPicker from './SessionPicker'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionName: props.sessionName
        };
    }

    handleSessionSubmit = (sessionName) => {
        this.setState({
            sessionName: sessionName
        })
    }

    render() {
        if (this.state.sessionName) {
            return <div>
                        <GameBoard />
                        <Players />
                </div> 
        }
        return <SessionPicker onSessionSubmit={this.handleSessionSubmit} />
    }
}

export default Game;