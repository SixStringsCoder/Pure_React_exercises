import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import { FileIcon } from '../FileIcon/FileIcon';
import { FileName } from '../FileName/FileName';
import { CommitMessage } from '../CommitMessage/CommitMessage';
import { Time } from '../Time/Time';

// Accepts objects as input; returns table rows of values from objects
export const FileListItem = ({ file }) => {
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
