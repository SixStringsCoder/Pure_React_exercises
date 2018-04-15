import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import { Board } from '../Board/Board'

export const Boards = ({boards}) => {
    return (
      <main className="boards-container">
        <div className="article_inner_cont">
          {
            boards.map((board, key) =>
              <Board board={board} key={key} />
            )
          }
        </div>  
      </main>
    );
}

Boards.propTypes = {
  boards: PropTypes.array.isRequired
}
