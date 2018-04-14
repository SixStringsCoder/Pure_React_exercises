import React, { Component } from 'react';
import logo from '../App/images/logo.svg';
import '../App/App.css';

export const Account = ({board}) => {
    return (
        <header className="account-header" role="banner" aria-labelled-by="account-name">
          <img src={logo} className="account-logo" alt="logo" />
          <h1 className="account-name">Self-Dependence</h1>
        </header>
    );
}
