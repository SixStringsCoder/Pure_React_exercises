import React from 'react';
import PropTypes from 'prop-types';
import '../Article/Article.css';
import { ArticleTitle } from '../ArticleTitle/ArticleTitle';
import { Card } from '../Card/Card';
import { AddCard } from '../AddCard/AddCard'


export const ArticleGroup = ({article}) => {
    return (
      <div class="article-group">
        <ArticleTitle article={article} />

        <Card article={article} />

        <AddCard />
      </div>
    );
}

ArticleGroup.propTypes = {
  list: PropTypes.object.isRequired
}
