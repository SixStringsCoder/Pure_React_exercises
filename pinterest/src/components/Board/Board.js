import React, { Component } from 'react';
import '../App/App.css';

export const Board = ({boards}) => {
    return (
      <article role="article">
        <header className="article-header" role="banner">
          <h5 className="topic-header">DIY: Tips and Tricks</h5>
          <h6 className="article-account-name">Self-Dependence</h6>
        </header>
        <section className="article-img-section" role="region">
          <div className="top-image-cont">
            <img src={require("../App/images/top1.jpg")} className="article_top_images" alt="Do it yourself" />
            <span className="pins">📍4,850</span>
          </div>
          <div className="bottom-image-cont">
            <img src={require("../App/images/bot1a.jpg")} className="article_bot_images" alt="Something else" />
            <img src={require("../App/images/bot1b.jpg")} className="article_bot_images" alt="Another thing" />
            <img src={require("../App/images/bot1c.jpg")} className="article_bot_images" alt="Another thing" />
        </div>
        </section>
        <footer className="article-footer" role="contentinfo">
          <button className="follow-btn">Follow</button>
        </footer>
      </article>
    );
}
