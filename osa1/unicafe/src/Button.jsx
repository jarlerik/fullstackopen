import React from 'react';

const Button = ({eventHandler, value, text}) => {

    return (
        <button onClick={() => { eventHandler(value + 1) }}>{text}</button>
    )
}

export default Button;