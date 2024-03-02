import React from 'react'
import './Total.css'

const Total = ({course}) => {
    const total = course.parts.reduce((a,b) => a+b.exercises, 0)

    return (
        <p className="bold">
            Total of {total} excersises
        </p>
    );
};

export default Total;
