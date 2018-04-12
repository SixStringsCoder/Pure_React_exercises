import React, { Component } from 'react';
import '../App/App.css';
import { Board } from '../Board/Board'

export const Boards = ({boards}) => {
    return (
      <main className="boards-container">
        <Board />
      </main>
    );
}
