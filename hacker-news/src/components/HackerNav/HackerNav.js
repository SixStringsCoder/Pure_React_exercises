import React from 'react';
import PropTypes from 'prop-types';
import '../Articles/Articles.css';


export const HackerNav = ({children}) => {
    let items = React.Children.toArray(children);
    for(let i = items.length - 1; i >= 1; i--) {
      items.splice(i, 0,
        <span key={i} className='separator'>|</span>
      );
    }

    return (
        <nav>
          <ul className="hacker-nav">
            {items}
          </ul>
        </nav>
    );
}
