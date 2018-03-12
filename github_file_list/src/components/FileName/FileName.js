import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

/* =========return objects' name value===================*/
export const FileName = ({ file }) => {
  return (
    <td className="file-name">{file.name}</td>
  )
}
FileName.propTypes = {
  file: PropTypes.object.isRequired
}
