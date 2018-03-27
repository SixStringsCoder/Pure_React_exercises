import React from 'react';
import PropTypes from 'prop-types';
import './List.css';
import { ListGroup } from '../ListGroup/ListGroup';

export const List = ({lists}) => {
    return (
        <section className="list" >
          {
            lists.map((list, index) =>
              <ListGroup list={list} key={index} />
            )
          }
        </section>
    );
}

List.propTypes = {
  lists: PropTypes.array.isRequired
}
