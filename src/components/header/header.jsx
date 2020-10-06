import React from 'react'
import './header.scss'

import Logo from '../logo'
import ScoreHolder from '../score-holder'

const Header = ({ score }) => {
  return (
    <div
      className="header
          col-12
          d-flex
          align-items-center
          align-items-sm-end
          justify-content-between"
    >
      <Logo />
      <ScoreHolder score={score} />
    </div>
  )
}

export default Header
