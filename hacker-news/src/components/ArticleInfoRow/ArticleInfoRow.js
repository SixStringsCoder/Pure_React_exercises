import React from 'react';
import '../Articles/Articles.css';


export const ArticleInfoRow = ({children}) => {
    let items = React.Children.toArray(children);
    for(let i = items.length - 1; i >= 1; i--) {
      items.splice(i, 0,
        <span key={i} className="info-separator">&#9961;</span>
      );
    }

    return (
      <footer role="contentinfo">
        <ul className="footer-info">
          {items}
        </ul>
      </footer>
    );
}
