import React from 'react';
import PropTypes from 'prop-types';
import '../List/List.css';
import { ListTitle } from '../ListTitle/ListTitle';
import { Card } from '../Card/Card';
import { AddCard } from '../AddCard/AddCard'


export const ListGroup = ({list}) => {
    return (
      <div class="list-group">
        <ListTitle list={list} />

        <Card list={list} />

        <AddCard />
      </div>
    );
}
