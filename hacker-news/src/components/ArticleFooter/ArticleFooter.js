import React from 'react';
import PropTypes from 'prop-types';
import '../Articles/Articles.css';
import { Article } from '../Article/Article';
// import { AddCard } from '../AddCard/AddCard'


export const ArticleFooter = ({article}) => {
    return (
      <footer role="contentinfo">
        <ul className="footer-info">
          <li>{article.points}</li>
          <li>{article.byline}</li>
          <li>{article.time}</li>
          <li>flag</li>
          <li>hide</li>
          <li>{article.comments}</li>
          <li>instapaper</li>
          <li>save to pocket</li>
        </ul>
      </footer>
    );
}

ArticleFooter.propTypes = {
  list: PropTypes.object.isRequired
}
