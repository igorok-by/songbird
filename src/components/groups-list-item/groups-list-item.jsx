import React  from 'react';

const GroupsListItem = ({title}) => {
  return (
    <li className="page-item flex-fill text-center">
      <a className="page-link" href="/#">{title}</a>
    </li>
  )
};

export default GroupsListItem;
