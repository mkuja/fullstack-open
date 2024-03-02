import React from 'react';

const Part = (props) => {
    // Define your state and other variables here using useState and other hooks

    return (
        <p>{props.name} {props.exercises}</p>
    );
}

export default Part;
