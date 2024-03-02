import React, { useState } from 'react';
import './Button.css';

const Button = ({onClick, text, hue}) => {
    const getClass = () => {
        switch (hue) {
            case 'red':
                return "red-hue evaluate-btn"
            case 'yellow':
                return "yellow-hue evaluate-btn"
            case 'green':
                return "green-hue evaluate-btn"
            default:
                throw new Error('Invalid hue');
        }
    }

    return (
        <input type="button" onClick={onClick} value={text} className={getClass()} />
    );
}

export default Button;
