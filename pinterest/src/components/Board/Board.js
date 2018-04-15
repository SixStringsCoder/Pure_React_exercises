import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';

export const Board = ({board}) => {
    return (
        <article role="article">
          <header className="article-header" role="banner">
            <h5 className="topic-header">{board.topic}</h5>
            <h6 className="article-account-name">{board.account.name}</h6>
          </header>
          <section className="article-img-section" role="region">
            <div className="top-image-cont">
              <img src={board.images.top} className="article_top_images" alt="Do it yourself" />
              <span className="pins">📍{board.account.pins}</span>
            </div>
            <div className="bottom-image-cont">
              <img src={board.images.bot1} className="article_bot_images" alt="Something else" />
              <img src={board.images.bot2} className="article_bot_images" alt="Another thing" />
              <img src={board.images.bot3} className="article_bot_images" alt="Another thing" />
          </div>
          </section>
          <footer className="article-footer" role="contentinfo">
            <button className="follow-btn">Follow</button>
          </footer>
        </article>
    );
}

Board.propTypes = {
  board: PropTypes.object.isRequired
}
