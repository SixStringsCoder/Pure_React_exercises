import React from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import { Styles } from '../Styles/Styles';

export const Stations = ({genres}) => (
    <section className="col-md-12" role="region">
      <Styles>
          {genres.map((genre, index) => {
              let size = "btn-xs";
              if (index < 15) {
                size = "btn-lg";
              } else if (index < 30) {
                size = "btn-md";
              } else if (index < 45)  {
                size = "btn-sm";
              }
              return (
                <a className="genre-link">
                  <button className={`btn btn-default ${size} genre-btn`} key={index}>
                    <span className="genre-label">{genre}</span>
                  </button>
                </a>
              )
            })}
        </Styles>
    </section>
);

Stations.propTypes = {
  genres: PropTypes.array.isRequired
}
