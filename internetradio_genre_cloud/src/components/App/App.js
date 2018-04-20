import React from 'react';
import './App.css';
import hot_icon from 'hot_icon.svg';

export const App = (props) => {
  return (
    <main>
      <header className="heading-bar">
      <span id="hot-icon">{hot_icon}</span>
        <h3 className="heading">Popular Genres</h3>
      </header>

      <section className="genre-area">
        <a className="genre-link" href="#">
          <button className="genre-btn">
            <span className="genre-label">Jazz</span>
          </button>
        </a>
      </section>
    </main>
  );
}
