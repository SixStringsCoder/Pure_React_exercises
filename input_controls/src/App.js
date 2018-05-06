import React, { Component } from 'react';
import './App.css';

class ControlledInput extends Component {
  state = {
    text: ''
  };
  
  handleChange = (event) => {    
    this.setState({
      text: event.target.value
    });
  }
  
  render() {
    return (
      <div className="container">
        <h2>This is a controlled Input</h2>
        <input className="textBox" type="text" onChange={this.handleChange} value={this.state.text} />
      </div>  
    );
  }
}


class NoNumbers extends Component {
  state = {
    onlyLetters: ''
  };
  
  handleChange = (event) => {
    let letters = event.target.value;
    letters = letters.replace(/[0-9]/g, '');
    this.setState({ onlyLetters: letters });
  }
  
  render() {
    return (
      <div className="container">
        <h2>This is a controlled Input</h2>
        <input className="textBox" type="text" onChange={this.handleChange} value={this.state.onlyLetters} />
      </div>
    )
  }
}


export { ControlledInput, NoNumbers }