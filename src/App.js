import React, { Component, useState } from 'react';
import logo from './logo.jpg';
import './App.css';
import cheerio from './cheerio3'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} alt="Salty Rogue Real Estate"/>
        </div>
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
          </div>
          <form onSubmit={cheerio}>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            <button type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
