import React  from 'react';

const GroupsListItem = ({title, isActive}) => {
  return (
    <li className={
      `page-item flex-fill text-center ${isActive ? 'active' : ''}`
    }>
      <a className="page-link" href="/#">{title}</a>
    </li>
  )
};

export default GroupsListItem;
