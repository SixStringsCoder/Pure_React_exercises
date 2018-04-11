import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export const App = ({boards}) => {
    return (
      <div className="app">

        <header className="account-header" role="banner" aria-labelled-by="account-name">
          <img src={logo} className="account-logo" alt="logo" />
          <h1 className="account-name">Self-Dependence</h1>
        </header>

        <nav className="navigation" role="navigation">
          <ul className="account-nav">
            <li>345<br />Boards</li>
            <li>345<br />Pins</li>
            <li>345<br />Likes</li>
            <li>345<br />Followers</li>
            <li>345<br />Following</li>
          </ul>
        </nav>

        <main className="boards-container">
          <article role="article">
            <header className="article-header" role="banner">
              <h5 className="topic-header">DIY: Tips and Tricks</h5>
              <h6 className="article-account-name">Self-Dependence</h6>
            </header>
            <section className="article-img-section" role="region">
              <div className="top-image-cont">
                <img src={require("./images/top1.jpg")} className="article_top_images" alt="Do it yourself" />
                <span className="pins">&#128204;4,850</span>
              </div>
              <div className="bottom-image-cont">
                <img src={require("./images/bot1a.jpg")} className="article_bot_images" alt="Something else" />
                <img src={require("./images/bot1b.jpg")} className="article_bot_images" alt="Another thing" />
                <img src={require("./images/bot1c.jpg")} className="article_bot_images" alt="Another thing" />
            </div>
            </section>
            <footer className="article-footer" role="contentinfo">
              <button className="follow-btn">Follow</button>
            </footer>
          </article>
        </main>

      </div>
    );
}
