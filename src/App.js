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
        <URLFetch/>
        <cheerio/>
      </div>
    );
  }
}

export default App;
