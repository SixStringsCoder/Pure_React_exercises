import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Lifecyles extends Component {
  state = { counter: 0}
  
  // These methods are called only once, when the component first mounts
  constructor(props) {
    super(props);
    alert("constructor (Initial Mount): This is the first method called when your component is created. If state is initialized with a property initializer, as shown above, then it will already be set by the time the constructor executes.");
    alert("constructor: State already set to:", this.state);
  }
  
  componentWillMount() {
    alert('componentWillMount (Initial Mount): Called immediately before your component mounts for the first time. Children are mounted before the parent, so each child’s componentWillMount will be called before the parent.');
  } 
  
  // Called after the first render()
  componentDidMount() {
    alert('componentDidMount (called after 1st render()): Called immediately after the first render. The component’s children are already rendered at this point, too. This is a good place to make AJAX requests to fetch any data you need..');
  }
  
  // These are called, in order, before and after each render. 
  // None of them are called during the initial render.
  componentWillReceiveProps(nextProps) {
    alert('componentWillReceiveProps (called after each render): Current props:', this.props);
    alert('componentWillReceiveProps: Next props:', nextProps);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    alert('shouldComponentUpdate (called before and after each render): Deciding to update');
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    alert('componentWillUpdate (called before and after each render): About to update...');
  }
  
  componentDidUpdate() {
    alert('componentDidUpdate (Render is done): You can use this opportunity to operate on the DOM if you need to. Prior to this, DOM nodes could still be in flux.');
  }
  
  // Unmounting
  componentWillUnmount() {
    alert('componentWillUnmount: The component is about to be unmounted. Maybe its item was removed from a list, maybe the user navigated to another tab…');
  }
  
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  
  render() {
    alert('render() is called.');
    return (
      <div className="container">
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleClick}>
        Click to increment
        </button>
      </div>
    );
  }
}


ReactDOM.render(
  <Lifecyles />,
  document.querySelector('#root')
);
