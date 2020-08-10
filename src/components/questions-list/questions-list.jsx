import React from 'react';
import './questions-list.scss';

import QuestionsListItem from '../questions-list-item'

const QuestionsList = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="questions-list w-100">
          <ul className="pagination justify-content-between">
            <QuestionsListItem title="Разминка" />
            <QuestionsListItem title="Воробьиные" />
          </ul>
        </div>
      </div>
    </div>
  )
};

export default QuestionsList;
