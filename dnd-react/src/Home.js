import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import Login from './Login';

class Home extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='Home'>
        <header>
            <h1>You are home</h1>
        </header>
      </div>
    );
  }
}
export default Home;