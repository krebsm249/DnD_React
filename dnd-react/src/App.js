import React, { Component } from 'react';
import logo from './dndicon.png';
import './App.css';
import firebase from './firebase';
import {Navbar, Nav} from 'react-bootstrap';


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
      <div className='App'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

          <Navbar.Brand href="#Home">
            <img alt="" src={logo} className="App-logo"/>
            {'DnD Character Creation'}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Characters">Characters</Nav.Link>
              <Nav.Link href="#Logout" onClick={this.logout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <p>
           Welcome to the Dungeons and Dragons character generator!
        </p>
      </div>
    );
  }
}

export default App;
