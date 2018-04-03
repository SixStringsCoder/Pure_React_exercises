import React from 'react';
import PropTypes from 'prop-types';
import '../Articles/Articles.css';
import { Article } from '../Article/Article';
import { ArticleInfoRow } from '../ArticleInfoRow/ArticleInfoRow';


export const ArticleFooter = ({article}) => {
    return (
      <ArticleInfoRow>
        <li>{article.points} points</li>
        <li>by {article.byline}</li>
        <li>{article.time}</li>
        <li>flag</li>
        <li>hide</li>
        <li>{article.comments} comments</li>
        <li>instapaper</li>
        <li>save to pocket</li>
      </ArticleInfoRow>

    );
}

ArticleFooter.propTypes = {
  article: PropTypes.object.isRequired
}
