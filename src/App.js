import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBox from './components/SearchBox/SearchBox';
import SearchResult from './components/SearchResult/SearchResult';

import './App.css';

const URL = {
  top: '/',
  events: '/events',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-title">Amplify App Demo V1</h3>
      </header>
      <main className="App-body">
        <BrowserRouter>
          <Routes>
            <Route exact path={URL.top} element={<SearchBox />} />
            <Route exact path={URL.events} element={<SearchResult />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer className="App-footer">
        <h4>Running on React {React.version}</h4>
      </footer>
    </div>
  );
}

export default App;
