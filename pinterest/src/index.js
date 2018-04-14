import React from 'react';
import ReactDOM from 'react-dom';
import './components/App/App.css';
import { App } from './components/App/App';

const boards = [
  {
    id: 1,
    topic: "DIY: Tips and Tricks",
    images: {
      top: require("./images/top1.jpg"),
      bot1: require("./images/bot1a.jpg"),
      bot2: require("./images/bot1b.jpg"),
      bot3: require("./images/bot1c.jpg")
    },
    account: {
      name: "Self-Dependence",
      logo: "./images/logo.svg",
      boards: 56,
      pins: 3490,
      likes: 238,
      followers: 34987,
      following: 23987,
    }
  },
  {
    id: 2,
    topic: "DIY: Do's and Dont's",
    images: {
      top: require("./images/top2.jpg"),
      bot1: require("./images/bot2a.jpg"),
      bot2: require("./images/bot2b.jpg"),
      bot3: require("./images/bot2c.jpg")
    },
    account: {
      name: "Gitter dun",
      logo: "./images/logo.svg",
      boards: 56,
      pins: 4590,
      likes: 238,
      followers: 34987,
      following: 987,
    }
  },
  {
    id: 3,
    topic: "DIY: Do's and Dont's",
    images: {
      top: require("./images/top3.jpg"),
      bot1: require("./images/bot3a.jpg"),
      bot2: require("./images/bot3b.jpg"),
      bot3: require("./images/bot3c.jpg")
    },
    account: {
      name: "Jose Mama",
      logo: "./images/logo.svg",
      boards: 6,
      pins: 4590,
      likes: 2382,
      followers: 3487,
      following: 23987,
    }
  },
  {
    id: 4,
    topic: "Kimmo Sabe",
    images: {
      top: require("./images/top4.jpg"),
      bot1: require("./images/bot4a.jpg"),
      bot2: require("./images/bot4b.jpg"),
      bot3: require("./images/bot4c.jpg")
    },
    account: {
      name: "Julio Down By da Skool Yard",
      logo: "./images/logo.svg",
      boards: 59,
      pins: 900,
      likes: 289,
      followers: 45,
      following: 435,
    }
  },
  {
    id: 5,
    topic: "Cheerio, Mate",
    images: {
      top: require("./images/top5.jpg"),
      bot1: require("./images/bot5a.jpg"),
      bot2: require("./images/bot5b.jpg"),
      bot3: require("./images/bot5c.jpg")
    },
    account: {
      name: "Uh Huh Uh Huh",
      logo: "./images/logo.svg",
      boards: 234,
      pins: 5345,
      likes: 45,
      followers: 6456,
      following: 567,
    }
  },
  {
    id: 6,
    topic: "Jumbo Tiny",
    images: {
      top: require("./images/top6.jpg"),
      bot1: require("./images/bot6a.jpg"),
      bot2: require("./images/bot6b.jpg"),
      bot3: require("./images/bot6c.jpg")
    },
    account: {
      name: "Hoo B Watchin'",
      logo: "./images/logo.svg",
      boards: 1212,
      pins: 234,
      likes: 67,
      followers: 87886,
      following: 5675,
    }
  },
]


ReactDOM.render(
  <App boards={boards} />,
  document.getElementById('root')
);
