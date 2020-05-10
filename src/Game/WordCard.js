import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

class WordCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            played: false
        };
    }

    render() {
        return <div className="card" onDoubleClick={this.reveal}>
            {this.state.played && this.props.card.type}
            <div>{this.props.card.word}</div>
        </div>;
    }

    reveal = async () => {
        console.log(this.props.card);
        this.setState({
            played: true
        });

        // Initialize Cloud Firestore through Firebase

        const firebaseConfig = {
            apiKey: "AIzaSyAfnlkONsOVDlmIGzvvUKIpiTBSdiXEtFc",
            authDomain: "codenames-react-app.firebaseapp.com",
            databaseURL: "https://codenames-react-app.firebaseio.com",
            projectId: "codenames-react-app",
            storageBucket: "codenames-react-app.appspot.com",
            messagingSenderId: "89243599312",
            appId: "1:89243599312:web:50f031dd82718c314ff9d5",
            measurementId: "G-9Q1Z2KZDPD"
          };

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
  
        const db = firebase.firestore();

        let docRef = db.collection('game-sessions').doc('test');

        let setAda = await docRef.set({ ...this.props.card, played: true });

        console.log(setAda);

        let doc = await docRef.get();
        if (doc.exists) {
            console.log('Read the document');
            console.log(doc.data());
        }

        docRef.onSnapshot((doc) => {
            if (doc.exists) {
                console.log('document updated');
                console.log(doc.data());
            }
        });
    }
}

export default WordCard;