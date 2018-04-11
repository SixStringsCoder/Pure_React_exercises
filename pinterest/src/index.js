import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { App } from './App';

const boards = [
  {
    id: 1,
    topic: "DIY: Tips and Tricks",
    images: {
      top: "./images/top1.jpg",
      bot1: "./images/bot1a.jpg",
      bot2: "./images/bot1b.jpg",
      bot3: "./images/bot1c.jpg"
    },
    account: {
      name: "Self-Dependence",
      logo: "../public/logo.svg",
      boards: 56,
      pins: 34590,
      likes: 238,
      followers: 34987,
      following: 23987,
    }
  },
]

ReactDOM.render(<App boards={boards} />, document.getElementById('root'));
