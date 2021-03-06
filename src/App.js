import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Greeting />
          {5+5}
          {"Welcome to react"}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <Title content="Some Simple Title"/>
        </main>
      </div>
    )
  } 
}

class Greeting extends React.Component{
  render(){
    return (
      <h1>Hallo!</h1>
    )
  }
}

export default App;
