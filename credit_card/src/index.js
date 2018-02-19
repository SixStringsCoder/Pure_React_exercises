import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import moment from 'moment';

const spaces = "\xa0";

function CreditCard({cardInfo}) {
  return (
      <section className="creditCard">
        <h2 className="bankName">{cardInfo.bank_name}</h2>
        <p className="cardNo">{cardInfo.card_no}</p>
        <p className="cardSecNo">{cardInfo.card_sec_no}</p>
        <div className="expDate">
          <div className="valid">
            <p>Valid</p>
            <p>Thru</p>
          </div>
          <p className="date">{cardInfo.card_exp}</p>
        </div>
        <p className="fullName">{cardInfo.full_name}</p>
      </section>
  );
}

// Test Object
const cardInfoObj = {
  full_name: "Rollin N. Doe",
  bank_name: "Bank of Antarctica",
  card_no: `1234 ${spaces} 5678 ${spaces} 9101 ${spaces} 1123`,
  card_sec_no: "1234",
  card_exp: "10/19",
};


ReactDOM.render(
  <CreditCard cardInfo={cardInfoObj} />,
  document.querySelector('#root')
);


CreditCard.propTypes = {
  cardInfoObj: PropTypes.shape({
    full_name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }).isRequired,
}
