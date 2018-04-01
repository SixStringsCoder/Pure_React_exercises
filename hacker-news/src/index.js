import React from 'react';
import ReactDOM from 'react-dom';
import { Articles } from './components/Articles/Articles';

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
  {
    id: 2,
    title: "Zenzizenzizenzic",
    website: "wikipedia.org",
    points: 140,
    byline: "vinchuco",
    time: "4 hours ago",
    comments: 40,
  },
  {
    id: 3,
    title: "A Practical Security Guide for Web Devs",
    website: "github.com",
    points: 72,
    byline: "zinwar",
    time: "2 hours ago",
    comments: 6,
  },
  {
    id: 4,
    title: "I got arrested in Kazakhstan and represented myself",
    website: "medium.com",
    points: 370,
    byline: "drpp",
    time: "7 hours ago",
    comments: 79,
  },
];

ReactDOM.render(
  <Articles articles={articles} />,
  document.querySelector('#root')
);
