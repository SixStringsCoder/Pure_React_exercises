import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class CountingParent extends Component {
  state = {
    actionCount: 0
  }
  
  handleAction = (action) => {
    console.log("Child did:", action);
    
    this.setState({
        actionCount: this.state.actionCount + 1
      }, () => {
        console.log(this.state);
      });  
  }
  
  resetCount = (action) => {    
    this.setState({
      actionCount: 0
    }, () => {
      console.log(`Count is reset to ${this.state.actionCount}.`);
    });
  }
  
  render() {
    return (
      <div className="container">
        <Child onAction={this.handleAction} onAction2={this.resetCount} />
        <p>Clicked {this.state.actionCount} times.</p>      
      </div>  
      
    );
  }
}



function Child({onAction, onAction2}) {
  return(
    <div className="container-sm">
      <button onClick={onAction}>
        Click me!
      </button>
      
      <button onClick={onAction2}>
        Reset Count
      </button>
    </div>

  );
}

export default CountingParent; 
