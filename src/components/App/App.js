import React, { Component } from 'react';
import Header from '../Header';
import Jokes from '../Jokes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jokes />
      </div>
    );
  }
}

export default App;
