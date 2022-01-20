import React from "react";

import './GoalList.css'

const GoalList = (props) => {
    return (
    <ul className='goal-list'>
      {props.goals.map((goalItem) => {
          return <li key={goalItem.id}>{goalItem.text}</li>;
      })}
    </ul>
    );
};

export default GoalList;