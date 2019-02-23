import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('users');
    const lg = {
      pass: this.state.password,
      user: this.state.username
    }
    itemsRef.push(lg);
    this.setState({
      password: '',
      username: ''
    });
  }

  render() {
    return (
      <div className='Login'>
        <header>
            <div className='wrapper'>
              <h1>Login</h1>
              
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
                <input type="text" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                <button>Login</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Login;