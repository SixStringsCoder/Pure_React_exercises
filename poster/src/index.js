import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import logo from './logo.svg';
import moment from 'moment';

const spaces = "\xa0";

function Poster({poster}) {
  return (
      <section className="poster">
        <div className="imageBox">
          <img className="image" src={poster.image} alt="React JS icon" />
        </div>
        <h1 className="title">{poster.title}</h1>
        <h2 className="text">{poster.text}</h2>
      </section>
  );
}

// Test Object
const posterObj = {
  image: logo,
  title: "React",
  text: "The best thing since jQuery, probably.",
};


ReactDOM.render(
  <Poster poster={posterObj} />,
  document.querySelector('#root')
);


Poster.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
