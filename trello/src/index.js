import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './components/List/List';

const lists = [
  {
    title: "Compose Music",
    card1: "cool jazz tune - small combo",
    card2: "big band medley - Jobim songs",
    card3: "underscore for Chinese storybook",
    card4: "movie soundtrack for Shaft III",
    card5: "woodwind quintet - impressionistic",
    card6: "a capella arrangement for Take 6"
  }
];

ReactDOM.render(
  <List lists={lists} />,
  document.querySelector('#root')
);
