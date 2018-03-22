import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

function TweetList({ tweets }) {
  return (
    <section>
      {
          tweets.map(tweet =>
          <Tweet tweet={tweet} key={tweet.id} />
          )
      }
    </section>
  );
}


function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>

      <div className="content">
        <NameWithHandle author={tweet.author} /> <Time time={tweet.timestamp}/>
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  let url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar" />
  );
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}


function NameWithHandle({ author }) {
  return (
    <span className="name-with-handle">
      <span className="name">{author.name}</span>
      <span className="handle">@{author.handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">
      {timeString}
    </span>
  );
}

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const getRetweetCount = (count) => {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet"/>
    {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart"/>
    <span className="like-count">
      {count ? count : null}
    </span>
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

var testTweets = [
{
  message: "Something about cats.",
  gravatar: "47757a86f3a64269d8ff5a14f1658a56",
  author: {
  handle: "catperson",
  name: "IAMA Cat Person"
  },
  likes: 12,
  retweets: 0,
  timestamp: "2018-07-30 21:24:37"
},
{
  message: "Trump asks Putin to prom.",
  gravatar: "47757a86f3a64269d8ff5a14f1658a56",
  author: {
  handle: "rushin-spy",
  name: "plays-w-oligarchs"
  },
  likes: 212,
  retweets: 10,
  timestamp: "2018-03-10 11:44:57"
},
{
  message: "I can't believe it",
  gravatar: "47757a86f3a64269d8ff5a14f1658a56",
  author: {
  handle: "skeptiskull",
  name: "I M Dubious"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2018-01-20 1:20:30"
},
{
  message: "Pope releases new salad dressing: Holy Vinaregret",
  gravatar: "47757a86f3a64269d8ff5a14f1658a56",
  author: {
  handle: "holysmoker",
  name: "hopin4heaven"
  },
  likes: 1,
  retweets: 0,
  timestamp: "2018-03-22 03:03:03"
}
];

ReactDOM.render(
  <TweetList tweets={testTweets} />,
  document.querySelector('#root')
);
