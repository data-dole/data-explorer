import React, { Component } from 'react';
import { Explorer} from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Data Explorer</h1>
        </header>
        <Explorer />
      </div>
    );
  }
}

export default App;
