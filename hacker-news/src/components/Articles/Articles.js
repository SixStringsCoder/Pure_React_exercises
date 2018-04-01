import React from 'react';
import PropTypes from 'prop-types';
import './Articles.css';
import { Article } from '../Article/Article';
import { HackerHeader } from '../HackerHeader/HackerHeader';

export const Articles = ({articles}) => {
    return (
      <section>
        <HackerHeader />

        {
          articles.map((article, key) =>
            <Article article={article} key={key} />
          )
        }
      </section>
    );
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired
}


//
// {
//   articles.map((article, index) =>
//     <ArticleGroup articles={articles} key={index} />
//   )
// }
