import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-title">Amplify App Demo V1</h3>
      </header>
      <main className="App-body">
        <SearchBox />
      </main>
      <footer className="App-footer">
        <h4>Running on React {React.version}</h4>
      </footer>
    </div>
  );
}

export default App;
