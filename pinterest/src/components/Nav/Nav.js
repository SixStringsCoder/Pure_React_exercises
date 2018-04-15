import React, { Component } from 'react';
import '../App/App.css';

export const Nav = ({boards}) => {
    return (
      <nav className="navigation" role="navigation">
        <ul className="account-nav">
          <li><a href="#">241<br /><span>Boards</span></a></li>
          <li><a href="#">3,350<br /><span>Pins</span></a></li>
          <li><a href="#">25<br /><span>Likes</span></a></li>
          <li><a href="#">1345<br /><span>Followers</span></a></li>
          <li><a href="#">45<br /><span>Following</span></a></li>
        </ul>
      </nav>
    );
}
