import React from 'react';
import './header.scss';
import logoImg from '../../assets/img/logo.svg';

import ScoreHolder from '../score-holder';

const Logo = () => {
  return (
    <img className="header__logo" src={logoImg} alt="logo" />
  )
};

const Header = ({score}) => {
  return (
    <div className="header
          col-12
          d-flex
          align-items-center
          justify-content-between">
      <Logo />
      <ScoreHolder score={score} />
    </div>
  )
};

export default Header;
