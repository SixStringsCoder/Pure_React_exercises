import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { App } from './App';

const boards = [
  {
    id: 1,
    topic: "DIY: Tips and Tricks",
    image: "https://diy.sndimg.com/content/dam/images/diy/fullset/2015/2/17/0/Original-Samantha-Pattillo_Stain-Table-Step2a.jpg.rend.hgtvcom.616.462.suffix/1424225940272.jpeg",
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
