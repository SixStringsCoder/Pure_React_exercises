import React from 'react';
import ReactDOM from 'react-dom';
import { Article } from './components/Article/Article';

const articles = [
  {
    id: 1,
    title: "Why I'm Suing the US Government",
    website: "bunniestudios.com",
    points: 13464,
    byline: "ivanka",
    time: "11 hours ago",
    comments: 254,
  },
];

ReactDOM.render(
  <Article articles={articles} />,
  document.querySelector('#root')
);
