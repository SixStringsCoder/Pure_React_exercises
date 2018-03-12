import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../../index.css';

/* ===========  return Time formatted with Moment.js    ============*/
export const Time = ({ time }) => {
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
