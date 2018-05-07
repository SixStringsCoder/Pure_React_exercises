import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class Select extends Component {
  state = {
    name: '',
    age: '',
    selection: ''
  }
  
  handleName = (event) => {
    this.setState({
      name: event.target.value 
    });
  }
  
  handleAge = (event) => {
    this.setState({
      age: event.target.value 
    });
  }
  
  handleState = (event) => {
    this.setState({
      selection: event.target.value 
    });
  }
  
  render() {
    let stateOptions = [
      {id: 1, value: "", label: "Pick your state." },
      {id: 2, value: 'MA', label: 'Massachusetts'},
      {id: 3, value: 'ME', label: 'Maine'},
      {id: 4, value: 'VT', label: 'Vermont'},
      {id: 5, value: 'NH', label: 'New Hampshire'},
      {id: 6, value: 'RI', label: 'Rhode Island'}
    ];
    
    return(
      <div className="container">  
        <input className="textBox" type="text"
          placeholder="Name"
          value={this.state.name} 
          onChange={this.handleName} />
          
        <input className="textBox" type="number"
          placeholder="Age"
          value={this.state.age} 
          onChange={this.handleAge} />
          
        <select value={this.state.selection} onChange={this.handleState}>
          {stateOptions.map(option =>
            <option value={option.value} key={option.id}>
              {option.label}
            </option>
            )}
        </select>
      </div>  
    );
  }
}


export { ControlledInput, NoNumbers, Select }