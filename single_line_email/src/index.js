import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function Inbox({ email }) {
  return (
      <section className="email">
        <div className="sender">{email.sender}</div>
        <div className="subject">{email.subject}</div>
        <div className="date">{email.date}</div>
        <input className="checkbox" type="checkbox"></input>
        <div className="pushpin">📍</div>
        <div className="message">{email.message}</div>
      </section>
  );
}

var emailObj = {
  sender: "Elvis",
  subject: "My Last Show",
  date: "Aug 16",
  message: "Hey, cool cats! Join me for one last show at the Silver Slipper in Las Vegas!"
};

ReactDOM.render(
  <Inbox email={emailObj} />,
  document.querySelector('#root')
);


Inbox.propTypes = {
  emailObj: PropTypes.shape({
    sender: PropTypes.string,
    subject: PropTypes.string,
    date: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
}
