import React from 'react';
import PropTypes from 'prop-types';
import '../Articles/Articles.css';


export const HackerHeader = () => {
    return (
      <header id="hacker-header">
        <span id="hacker-logo">Y</span>
        <h3 id="hacker-title">Hacker News</h3>
        <nav>
          <ul className="hacker-nav">
            <li>news</li>
            <li>threads</li>
            <li>comments</li>
            <li>show</li>
            <li>ask</li>
            <li>jobs</li>
            <li>submit</li>
          </ul>
        </nav>
      </header>
    );
}

// HackerHeader.propTypes = {
//   article: PropTypes.object.isRequired
// }
