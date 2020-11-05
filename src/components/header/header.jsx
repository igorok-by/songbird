import React, { memo } from 'react'
import './header.scss'

import Logo from '../logo'

const Header = ({ score }) => {
  return (
    <header
      className="header
          col-12
          d-flex
          align-items-center
          align-items-sm-end
          justify-content-between"
    >
      <Logo />
      <h4 className="header__score">Счёт: {score}</h4>
    </header>
  )
}

export default memo(Header)
