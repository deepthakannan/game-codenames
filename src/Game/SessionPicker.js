import React from 'react';

class SessionPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: ''
        }
    }

    onSessionTextChange = (e) => {
        this.setState({
            session: e.target.value
        });
        e.preventDefault();
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSessionSubmit(this.state.session);
    }

    render(){
        return <div>
            {this.props.invalidSession && 
            <div>
                {`Session '${this.props.invalidSession}' is invalid`}
            </div>
            }
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onSessionTextChange} value={this.state.session} />
                <input type="submit" />
            </form>
            
        </div>
    }
}

export default SessionPicker;