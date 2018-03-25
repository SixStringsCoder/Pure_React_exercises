import React from 'react';
import PropTypes from 'prop-types';
import '../List/List.css';


export const ListTitle = ({list}) => {
    return (
      <div className="list-title">
        <h1>{list.title}</h1>
        <span className="action-icon">...</span>
      </div>
    );
}
