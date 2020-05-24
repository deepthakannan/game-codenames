import React from 'react';
import { withRouter } from 'react-router-dom'

class SessionPicker extends React.Component<{history: any, invalidSession: boolean}, { sessionId: string }> {
    constructor(props) {
        super(props);
        this.state = {
            sessionId: 'test'
        }
    }

    onSessionTextChange = (e) => {
        this.setState({
            sessionId: e.target.value
        });
        e.preventDefault();
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(`${this.state.sessionId}`)
    }

    render() {
        return <div>
            {this.props.invalidSession && 
            <div>
                {`Session '${this.props.invalidSession}' is invalid`}
            </div>
            }
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onSessionTextChange} value={this.state.sessionId} />
                <input type="submit" />
            </form>
            
        </div>
    }
}

export default withRouter(SessionPicker);