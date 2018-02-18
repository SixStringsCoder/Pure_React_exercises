import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import moment from 'moment';

function AddressLabel({ person }) {
  return (
    <div className="container">
      <div className="label">
        <p>{person.full_name}</p>
        <p>{person.address}</p>
        <p className="cityStateZip">{person.city}, {person.state} {person.zip}</p>
      </div>
    </div>
  );
}

// Test Object
var testPerson = {
  full_name: "Who B. Dat",
  address: "8342 Sumdirt Road",
  city: "Lost Wages",
  state: "Nevada",
  zip: "78999"
};

ReactDOM.render(
  <AddressLabel person={testPerson} />,
  document.querySelector('#root')
);


AddressLabel.propTypes = {
  person: PropTypes.shape({
    full_name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }).isRequired,
}
