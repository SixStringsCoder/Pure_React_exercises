import React, { Component } from 'react';
import '../App/App.css';

export const Nav = ({boards}) => {
    return (
      <nav className="navigation" role="navigation">
        <ul className="account-nav">
          <li><a href="#">241<br />Boards</a></li>
          <li><a href="#">3,350<br />Pins</a></li>
          <li><a href="#">25<br />Likes</a></li>
          <li><a href="#">1345<br />Followers</a></li>
          <li><a href="#">45<br />Following</a></li>
        </ul>
      </nav>
    );
}
