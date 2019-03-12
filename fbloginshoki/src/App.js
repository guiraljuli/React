import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook  from "./composants/Facebook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Titre">Test de connection Facebook </h1>
        </header>
        <p className="Debut"> Pour commencer, veuillez vous identifier </p>
        <Facebook/>
      </div>

    );
  }
}

export default App;
