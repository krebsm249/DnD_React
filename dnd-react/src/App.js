import React, { Component } from 'react';
import logo from './dndicon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="topnav">
              <a href="Home">Home</a>
              <a href="Characters">Characters</a>
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
