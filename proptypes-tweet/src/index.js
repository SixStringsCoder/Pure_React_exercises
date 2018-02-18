import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import moment from 'moment';

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

var testTweet = {
  message: "Something about cats.",
  gravatar: "47757a86f3a64269d8ff5a14f1658a56",
  author: {
  handle: "catperson",
  name: "IAMA Cat Person"
  },
  likes: 12,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(
  <Tweet tweet={testTweet} />,
  document.querySelector('#root')
);

LikeButton.propTypes = {
  count: PropTypes.number
}

RetweetButton.propTypes = {
  count: PropTypes.number
}

Message.propTypes = {
  text: PropTypes.string
}

Time.propTypes = {
  time: PropTypes.string
}

NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    handle: PropTypes.string
  }).isRequired,
}

Avatar.propTypes = {
  hash: PropTypes.string.isRequired
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
}

// Tweet.propTypes = {
//   testTweet: PropTypes.shape({
//     message: PropTypes.string,
//     gravatar: PropTypes.string.isRequired,
//     author: PropTypes.shape({
//     handle: PropTypes.string,
//     name: PropTypes.string
//     }),
//     likes: PropTypes.number,
//     retweets: PropTypes.number,
//     timestamp: PropTypes.string.isRequired
//   })
// }
