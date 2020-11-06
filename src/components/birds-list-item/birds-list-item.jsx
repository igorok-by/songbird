import React, { memo } from 'react'
import classNames from 'classnames'
import './birds-list-item.scss'

const BirdsListItem = ({ answerStatus, birdName, handleClick }) => {
  const classes = classNames(
    'list-group-item',
    'birds-list-item',
    { 'birds-list-item--wrong': answerStatus === 'wrong' },
    { 'birds-list-item--right': answerStatus === 'right' },
  )

  return (
    <li className={classes}>
      <button type="button" onClick={() => handleClick(birdName)}>
        {birdName}
      </button>
    </li>
  )
}

export default memo(BirdsListItem)
