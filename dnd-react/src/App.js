import React, { Component } from 'react';
import logo from './dndicon.png';
import './App.css';
import firebase from './firebase';


class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="topnav">
              <a href="Home">Home</a>
              <a href="Characters">Characters</a>
              <a href="Logout" onClick={this.logout}>Logout</a>
          </div>
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to the Dungeons and Dragons character generator!
          </p>

        </header>
      </div>
    );
  }
}

export default App;
