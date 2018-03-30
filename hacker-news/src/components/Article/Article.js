import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';
// import { ArticleGroup } from '../ArticleGroup/ArticleGroup';

export const Article = ({articles}) => {
    return (
      <main className="container">
        <article className="article" role="article">
          <header role="banner">
            <span className="id" aria-label="id number">1.</span>
            <span className="arrow">&#x25B2;</span>
            <h3 className="article-title">Why I am Suing the US Government</h3>
            <span className="article-website">(bunniestudios.com)</span>
          </header>

          <footer role="contentinfo">
            <ul className="footer-info">
              <li>13464 points</li>
              <li>by ivank</li>
              <li>11 hours ago</li>
              <li>flag</li>
              <li>hide</li>
              <li>257 comments</li>
              <li>instapaper</li>
              <li>save to pocket</li>
            </ul>
          </footer>
        </article>
      </main>
    );
}

Article.propTypes = {
  articles: PropTypes.array.isRequired
}


//
// {
//   articles.map((article, index) =>
//     <ArticleGroup articles={articles} key={index} />
//   )
// }
