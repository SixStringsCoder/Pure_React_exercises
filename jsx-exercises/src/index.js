import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
  return React.createElement('div', {},
  React.createElement('div', {}, 'The Title'),
  React.createElement('div', {}, 'The Author'),
    React.createElement('ul', {},
    React.createElement('li', {}, '5 stars'),
    React.createElement('li', {}, '12-345678-910'),
    )
  );
}

function Greeting() {
  var username = "Steve";
  return (
    <span>
      {username ? 'Hello, ' + username : 'Not logged in'}
    </span>
    );
}

// a. Name a component starting with a lowercase letter
function lowercaseComponent() {
  return (
    <span>This will not render</span>
  );
}

// b. Returning 2 elements at once
function TwoElementsAtOnce() {
  return (
    <span>One</span>
    <span>Two</span>
  );
}

// c. Returning an array
function AnArrayOfFail() {
  return [
    <span>One</span>,
    <span>Two</span>
  ];
}

// d. 2 expressions inside single braces
function TwoExpressions() {
  var x = 7;
  return (
    <span>{x && 5; x && 7}</span>
  );
}

// e. Return from within JSX
function ReturnInJSX() {
  return (
    <span>{return}</span>
  );
}

// f. Function calls in JSX
function AlertHello() {
  return (
    <span>{alert('hello')}</span>
  );
}

function QuotedString() {
  return (
    <div>
      <span>"Quoted string"</span>
      <span>{'"Quoted string inside braces"'}</span>
      <span>{"'single quotes'"}</span>
    </div>
  );
}

ReactDOM.render(
  <QuotedString />,
  document.querySelector('#root')
);
