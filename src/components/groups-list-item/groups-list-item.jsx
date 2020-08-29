import React  from 'react';
import './groups-list-item.scss';

const GroupsListItem = ({title, isActive}) => {
  return (
    <li className={
      `page-item flex-fill groups-list-item ${isActive ? 'active' : ''}`
    }>
      <p className="page-link">{title}</p>
    </li>
  )
};

export default GroupsListItem;
