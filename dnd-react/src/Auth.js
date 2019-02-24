import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import Login from './Login';
import App from './App';

class Auth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount() {
    this.authListener();
  }
  
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user) {
        this.setState({user});
      } else {
        this.setState({user:null});
      }
    });
  }

  render() {
    return (
      <div className='Auth'>
        <header>
            <div className='wrapper'>
              {this.state.user ? (<App />) : (<Login/>)}              
            </div>
        </header>
      </div>
    );
  }
}
export default Auth;