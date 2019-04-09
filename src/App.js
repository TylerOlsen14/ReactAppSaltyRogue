import React, { Component, useState } from 'react';
import logo from './logo.jpg';
import './App.css';
import URLFetch from './URLFetch';
import cheerio from './cheerio2'

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
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
      </div>
    );
  }
}

export default App;
