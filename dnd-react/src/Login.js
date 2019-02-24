import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email:'',
      password:''
    }
  }

  login(e) {
      e.preventDefault();
      firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch((error) => {
          console.log(error);
      });

      console.log("Within Login");
  }

  signup(e) {
      e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch((error) => {
          console.log(error);
      });
  }

  handleChange(e) {
      this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    return (
        <div className='container'>
            <form>
                <div>
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" placeholder="Enter Email" />
                </div>
                <div>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" onClick={this.login}>Login</button>
                <button onClick={this.signup}>Sign Up</button>
            </form>
        </div>
    );
  }
}
export default Login;