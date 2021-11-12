import React from 'react';

import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';

import db from './components/Firebase/Firebase';

class App extends React.Component {
  state = {
    user: false,
    messages: []
  }

  fetchMessages = () => {
    const query = db.collection('Messages').orderBy('createdAt');
    query.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const messageObj = {};
        messageObj.data = change.doc.data();
        messageObj.id = change.doc.id;
        this.setState({
          ...this.state,
          messages: [messageObj, ...this.state.messages]
        })
      })
    })
  }

  componentDidMount() {
    this.fetchMessages();
  }

  render() {
    return (
      <div>
        { this.state.messages.map((m) => <p>{m.data.text}</p>)}
      </div>
    )
  }
}

export default App;
