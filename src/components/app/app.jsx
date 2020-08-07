import React, { Component } from 'react';

import Dummy from '../../assets/img/dummy.jpg';
import './app.css';

export default class App extends Component {

  state = {

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src={Dummy} alt="dummy" />
          </div>
        </div>
      </div>
    );
  }
};
