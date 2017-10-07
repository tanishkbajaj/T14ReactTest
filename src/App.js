import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SomeClass from './Components/SomeClass';

class App extends Component {
	
  someFunction(){
	  return 10;
  }

  render() {
	 
	let x = this.someFunction();  
	  
    return (
      <div className="App">
		<h1> Hello World </h1>
		<SomeClass x={x} y={x+3}/>
		<SomeClass x={x} y={x+3}/>
		<SomeClass x={x} y={x+3}/>
		<SomeClass x={x} y={x+3}/>
		<SomeClass x={x} y={x+3}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
