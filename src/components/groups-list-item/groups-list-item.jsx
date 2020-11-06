import React, { memo } from 'react'
import classNames from 'classnames'
import './groups-list-item.scss'

const GroupsListItem = ({ title, isActive }) => {
  const classes = classNames(
    'page-item',
    'flex-fill',
    'd-flex',
    'd-sm-block',
    'groups-list-item',
    { active: isActive },
  )

  return (
    <li className={classes}>
      <p className="d-none d-sm-block align-items-center page-link">{title}</p>
    </li>
  )
}

export default memo(GroupsListItem)
