import React, { Component } from 'react';
import './App.css';
import Current from './Current/Current';
import History from './History/History';

class App extends Component {
  render() {
    return(
      <div className="">
        <div className="topheader">
          <header className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">coinList</span>
              </div>
              <div className="navbar-end">
                <a className="navbar-item" href="" target="_blank" rel="">Pusher.com</a>
              </div>
            </nav>
          </header>
        </div>
        <section className="results--section">
          <div className="container">
            <h1>coinList</h1>
          </div>
          <div className="results--section__inner">
            <Current />
            <History />
          </div>
        </section>
      </div>
    );
  }
}

export default App;