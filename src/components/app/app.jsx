import React, { Component } from 'react';
import './app.scss';
// import Dummy from '../../assets/img/dummy.jpg';

import Header from '../header';
import QuestionsList from '../questions-list';

export default class App extends Component {

  state = {

  }

  render() {
    return (
      <div className="container">
        <Header />
        <QuestionsList />
      </div>
    );
  }
};
