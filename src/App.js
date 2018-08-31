import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import harData from './example.har';
import { PerfCascade } from './PerfCascade';
import { WithZipJs } from './WithZipJs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-PerfCascade</h1>
          <div>
            <p>This is how it looks:</p>
            <WithZipJs>
              <PerfCascade harData={harData} />
            </WithZipJs>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
