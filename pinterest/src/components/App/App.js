import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Account } from '../Account/Account';
import { Nav } from '../Nav/Nav';
import { Boards } from '../Boards/Boards'

export const App = ({boards}) => {
    return (
      <div className="app">
        <Account boards={boards} />
        <Nav boards={boards} />
        <Boards boards={boards} />
      </div>
    );
}

App.propTypes = {
  boards: PropTypes.array.isRequired
}
