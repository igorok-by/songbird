import React from 'react';
import './groups-list.scss';

import GroupsListItem from '../groups-list-item'

const GroupsList = ({birdGroups}) => {

  const groupsList = birdGroups.map(({title, key, isActive}) => {
    return <GroupsListItem title={title} key={key} isActive={isActive} />;
  })

  return (
    <div className="col-12">
      <div className="questions-list w-100">
        <ul className="pagination justify-content-between">
          {groupsList}
        </ul>
      </div>
    </div>
  )
};

export default GroupsList;
