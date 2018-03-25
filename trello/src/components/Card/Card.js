import React from 'react';
import PropTypes from 'prop-types';
import '../List/List.css';


export const Card = ({list}) => {
    return (
      <div className="card">
        <p className="project-name">{list.card1}</p>
        <p className="project-name">{list.card2}</p>
        <p className="project-name">{list.card3}</p>
        <p className="project-name">{list.card4}</p>
        <p className="project-name">{list.card5}</p>
        <p className="project-name">{list.card6}</p>
      </div>
    );
}
