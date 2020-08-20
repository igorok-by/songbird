import React, { Component } from 'react';
import './app.scss';
// import Dummy from '../../assets/img/dummy.jpg';

import Header from '../header';
import GroupsList from '../groups-list';
import QuestionContainer from '../question-container';
import AnswerContainer from '../answer-container';
import ButtonNext from '../button-next';

export default class App extends Component {

  state = {

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
          <GroupsList />
          <QuestionContainer />
          <AnswerContainer />
          <ButtonNext />
        </div>
      </div>
    );
  }
};
