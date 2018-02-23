import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function ErrorBox({ children }) {
  return (
    <div className="errorBox">
      <div className="icon">
        <span className="warningEmoji" role="img" aria-label="warning emoji">⚠️</span>
      </div>
      <div className="errorMsg">{children}</div>
    </div>
  );
}

ReactDOM.render(
  <ErrorBox children={"The world is ending!"} />,
  document.querySelector('#root')
);


ErrorBox.propTypes = {
  children: PropTypes.node
}
