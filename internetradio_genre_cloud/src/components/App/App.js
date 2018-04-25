import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Header } from '../Header/Header';
import { Stations } from '../Stations/Stations';

export const App = ({genres}) => {
  return (
    <main role="main">
      <Header />
      <Stations genres={genres} />
    </main>
  );
}

App.propTypes = {
  genres: PropTypes.array.isRequired
}
