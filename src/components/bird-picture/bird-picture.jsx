import React, { memo } from 'react'
import classNames from 'classnames'

import './bird-picture.scss'
import dummyPic from '../../assets/img/dummy.png'

const BirdPicture = ({ isQuestionOpen, image }) => {
  const classes = classNames('rounded', 'bird-picture', {
    'bird-picture--padded': isQuestionOpen,
  })

  return (
    <div className={classes}>
      <img
        src={isQuestionOpen ? dummyPic : image}
        className="rounded bird-picture__img"
        alt="Птичка"
      />
    </div>
  )
}

export default memo(BirdPicture)
