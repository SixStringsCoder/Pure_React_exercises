import React from 'react';
import PropTypes from 'prop-types';
import '../Articles/Articles.css';
import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import { ArticleFooter } from '../ArticleFooter/ArticleFooter'


export const Article = ({article}) => {
    return (
        <main className="container">
          <article className="article" role="article">

            <ArticleHeader article={article} />

            <ArticleFooter article={article}/>

          </article>
        </main>
    );
}

Article.propTypes = {
  list: PropTypes.object.isRequired
}
