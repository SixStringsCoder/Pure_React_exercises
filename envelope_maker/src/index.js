import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import moment from 'moment';

function Envelope({fromPerson, toPerson}) {
  return (
    <main className="container">
          <section className="fromlabel">
            <p>{fromPerson.full_name}</p>
            <p>{fromPerson.address}</p>
            <p className="cityStateZip">{fromPerson.city}, {fromPerson.state} {fromPerson.zip}</p>
          </section>

      <Stamp />

          <section className="tolabel">
            <p>{toPerson.full_name}</p>
            <p>{toPerson.address}</p>
            <p className="cityStateZip">{toPerson.city}, {toPerson.state} {toPerson.zip}</p>
          </section>
    </main>
  )
}

function Stamp(props) {
  return (
    <div className="stamp">
      <span>STAMP</span>
    </div>
  );
}

// Test Objects
const fromPersonObj = {
  full_name: "Shirley Dude",
  address: "8342 Surfsup Circle",
  city: "Malibu",
  state: "California",
  zip: "94621"
};

const toPersonObj = {
  full_name: "Who B. Dat",
  address: "7777 Sumdirt Road",
  city: "Lost Wages",
  state: "Nevada",
  zip: "89121"
};




ReactDOM.render(
  <Envelope fromPerson={fromPersonObj} toPerson={toPersonObj} />,
  document.querySelector('#root')
);


Envelope.propTypes = {
  fromPersonObj: PropTypes.shape({
    full_name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }).isRequired,
  toPersonObj: PropTypes.shape({
    full_name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }).isRequired,
}
