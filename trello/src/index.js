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
  },
  {
    title: "Recipes to try",
    card1: "Baked Spaghetti Squash Lasagna Style",
    card2: "Blueberry Smoothie Bowl",
    card3: "Pesto Pizza",
    card4: "Thai Rice Noodle Salad",
    card5: "Double Tomato Bruschetta",
    card6: "Roasted Garlic Cauliflower"
  },
  {
    title: "Shows to watch",
    card1: "Breaking Bad",
    card2: "Six feet Under",
    card3: "Penny Dreadful",
    card4: "Master of None",
    card5: "Here and Now",
    card6: "Wild Wild Country",
  }
];

ReactDOM.render(
  <List lists={lists} />,
  document.querySelector('#root')
);
