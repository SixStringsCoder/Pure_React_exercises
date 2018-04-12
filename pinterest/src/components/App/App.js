import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import { Account } from '../Account/Account';
import { Nav } from '../Nav/Nav';
import { Boards } from '../Boards/Boards'

export const App = ({boards}) => {
    return (
      <div className="app">

        <Account />
        <Nav />
        <Boards />

      </div>
    );
}
