import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './index.css';

// Accept an array of objects; return each object
const FileList = ({ files }) => {
  return (
    <table className="file-list">
      <tbody>
        {
          files.map(file =>
          <FileListItem file={file} key={file.id} />
          )
        }
      </tbody>
    </table>
  );
}
FileList.propTypes = {
  files: PropTypes.array.isRequired,
}

// Accepts objects as input; returns table rows of values from objects
const FileListItem = ({ file }) => {
  return (
    <tr className="file-list-item">
      <FileIcon file={file} />
      <FileName file={file} />
      <CommitMessage commit={file.latestCommit} />
      <Time time={file.updated_at} />
    </tr>
  );
}
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

/* =========return objects' name value===================*/
const FileName = ({ file }) => {
  return (
    <td className="file-name">{file.name}</td>
  )
}
FileName.propTypes = {
  file: PropTypes.object.isRequired
}

/* =========return objects' type (of icon) value==========*/
const FileIcon = ({ file }) => {
  let icon = 'fa-file-text-o';
  if (file.type === 'folder') {
    icon = 'fa-folder';
  }

  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  );
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired
}

/* ============return Latest Commit message====================*/
const CommitMessage = ({ commit }) => {
  return (
    <td className="commit-message">{commit.message}</td>
  );
}
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
}

/* ===============return Time formatted with Moment.js================*/
const Time = ({ time }) => {
  const timeString = moment(time.updated_at).fromNow();
  return (
    <td className="age">
      {timeString}
    </td>
  );
}
Time.propTypes = {
  time: PropTypes.string.isRequired
}

/* Test Array */
const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
    message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
    message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
    message: 'Added a readme'
    }
  },
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById('root')
);
