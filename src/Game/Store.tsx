import * as firebase from 'firebase';
import 'firebase/firestore';
import { Card } from './Card';
import { Player } from '../Profile/Player';

class Store {
    docRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
    updateHandler: (cards: Card[], players: Player[]) => void;
    constructor(sessionId, docUpdateHandler) {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(this.getConfig());
        }
        const db = firebase.firestore();
        this.docRef = db.collection('game-sessions').doc(sessionId);
        this.updateHandler = docUpdateHandler;
        this.docRef.onSnapshot((doc) => this.onDocumentUpdate(doc));
    }

    get = async () => {
        const doc = await this.docRef.get();
        return doc.exists ? doc.data() : null;
    }

    upsert = async (cards, players) => {
        const data = { cards: cards.map(this.cardJSON), players: players.map(this.playerJSON) };
        if (await this.get() == null) {
            await this.docRef.set(data);
            this.docRef.onSnapshot((doc) => this.onDocumentUpdate(doc));
        } else {
            await this.docRef.update(data);
        }
    }

    addPlayer = async (player: Player) => {
        this.docRef.update({
            players: firebase.firestore.FieldValue.arrayUnion(this.playerJSON(player))
        });
    }

    removePlayer = async (player: Player) => {
        this.docRef.update({
            players: firebase.firestore.FieldValue.arrayRemove(this.playerJSON(player))
        });
    }

    onDocumentUpdate = (doc) => {
        const data = doc.data();
        this.updateHandler(data?.cards || [], data?.players || []);
    }

    private playerJSON(player: Player): any {
        return { ...player };
    }

    private cardJSON(card: Card): any {
        return { ...card };
    }

    getConfig() {
        return {
            apiKey: "AIzaSyAfnlkONsOVDlmIGzvvUKIpiTBSdiXEtFc",
            authDomain: "codenames-react-app.firebaseapp.com",
            databaseURL: "https://codenames-react-app.firebaseio.com",
            projectId: "codenames-react-app",
            storageBucket: "codenames-react-app.appspot.com",
            messagingSenderId: "89243599312",
            appId: "1:89243599312:web:50f031dd82718c314ff9d5",
            measurementId: "G-9Q1Z2KZDPD"
        };
    }
}

export default Store