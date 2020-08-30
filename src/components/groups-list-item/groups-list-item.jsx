import React  from 'react';
import './groups-list-item.scss';

const GroupsListItem = ({title, isActive}) => {
  return (
    <li className={
      `page-item flex-fill d-flex d-sm-block groups-list-item ${isActive ? 'active' : ''}`
    }>
      <p className="d-none d-sm-block align-items-center page-link">{title}</p>
    </li>
  )
};

export default GroupsListItem;
