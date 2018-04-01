import React from 'react';
import PropTypes from 'prop-types';
import '../Articles/Articles.css';
import { Article } from '../Article/Article';
// import { AddCard } from '../AddCard/AddCard'


export const ArticleHeader = ({article}) => {
    return (
            <header role="banner">
              <span className="id" aria-label="id number">{article.id}.</span>
              <span className="arrow">&#x25B2;</span>
              <h3 className="article-title">{article.title}</h3>
              <span className="article-website">({article.website})</span>
            </header>
    );
}

ArticleHeader.propTypes = {
  list: PropTypes.object.isRequired
}
