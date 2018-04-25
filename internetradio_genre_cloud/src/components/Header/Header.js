import React from 'react';
import '../App/App.css';
import flame_icon from './hot_icon.svg';

export const Header = () => {
  return (
      <header className="heading-bar" role="banner">
      <img id="hot-icon" src={flame_icon} alt="flame icon"/>
        <h3 className="heading">Popular Genres</h3>
      </header>
  );
}
