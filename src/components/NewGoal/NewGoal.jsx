import React from "react";

import './NewGoal.css'

const NewGoal = props => {
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.round(Math.random() * 1000000).toString(),
            text: 'My new goal!'
        }

        props.onAddGoal(newGoal);
    }

    return (
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" />
        <button type="submit">Add Goal</button>
    </form>
    );
};

export default NewGoal;