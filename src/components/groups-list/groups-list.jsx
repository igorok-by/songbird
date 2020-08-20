import React from 'react';
import './groups-list.scss';

import GroupsListItem from '../groups-list-item'

const GroupsList = () => {
  return (
    <div className="col-12">
      <div className="questions-list w-100">
        <ul className="pagination justify-content-between">
          <GroupsListItem title="Разминка" />
          <GroupsListItem title="Воробьиные" />
          <GroupsListItem title="Лесные птицы" />
          <GroupsListItem title="Певчие птицы" />
          <GroupsListItem title="Морские птицы" />
        </ul>
      </div>
    </div>
  )
};

export default GroupsList;
