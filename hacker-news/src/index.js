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
  {
    id: 5,
    title: "Sculptures of Housing Prices",
    website: "dougmccune.com",
    points: 254,
    byline: "dougmccune",
    time: "7 hours ago",
    comments: 149,
  },
  {
    id: 6,
    title: "Guide to ES6",
    website: "javajazz.io",
    points: 1240,
    byline: "spiderman",
    time: "40 min ago",
    comments: 230,
  },
  {
    id: 7,
    title: "1200 Ways to Gain Weight",
    website: "fatcheeks.com",
    points: 782,
    byline: "heartinhawaii",
    time: "2 min ago",
    comments: 60,
  },
  {
    id: 8,
    title: "3D Print Your Dog",
    website: "quienes.com",
    points: 170,
    byline: "senor_queso",
    time: "1 hours ago",
    comments: 9,
  },
  {
    id: 9,
    title: "Hacking Antarctic Elections",
    website: "downundertheunder.org",
    points: 82,
    byline: "coldblooded",
    time: "20 hr ago",
    comments: 6,
  },
  {
    id: 10,
    title: "IBM's CBM OK?",
    website: "needbombs.com",
    points: 470,
    byline: "mongerowar",
    time: "11 hours ago",
    comments: 80,
  },
];

ReactDOM.render(
  <Articles articles={articles} />,
  document.querySelector('#root')
);
