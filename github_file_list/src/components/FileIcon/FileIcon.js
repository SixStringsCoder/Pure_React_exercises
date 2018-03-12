import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

/* =========return objects' type of file icon value==========*/
export const FileIcon = ({ file }) => {
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
