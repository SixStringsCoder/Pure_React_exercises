import React from 'react';
import PropTypes from 'prop-types';
import '../Article/Article.css';


export const ArticleTitle = ({article}) => {
    return (
      <div className="article-title">
        <h1>{article.title}</h1>
        <span className="action-icon">...</span>
      </div>
    );
}

ArticleTitle.propTypes = {
  article: PropTypes.object.isRequired
}
