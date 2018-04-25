import React from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';


export const Styles = ({children}) => {
    return (
      <div className="genre-area">
        {children}
      </div>
    )
};

Styles.propTypes = {
  children: PropTypes.array.isRequired
}
