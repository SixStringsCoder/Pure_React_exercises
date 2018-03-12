import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';


/* ============return Latest Commit message====================*/
export const CommitMessage = ({ commit }) => {
  return (
    <td className="commit-message">{commit.message}</td>
  );
}
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
}
