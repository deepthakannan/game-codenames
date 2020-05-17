import React from 'react';
import Game from './Game/Game'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SessionPicker from './SessionPicker'


function App() {
  return (
    <div className="App">
      <Router>
                <Route exact={true} path="/" component={SessionPicker} />
                <Route exact={true} path="/:sessionId" render={( {match} ) => <Game sessionId={match.params.sessionId} />} />
      </Router> 
    </div>
  );
}

export default App;
