import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import { FileListItem } from '../FileListItem/FileListItem';

// Accept an array of objects; return each object
export const FileList = ({ files }) => {
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
