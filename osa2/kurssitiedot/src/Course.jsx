import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
    const { name, parts } = course;
    const sum = parts.reduce((result, current) => result + current.exercises, 0);
    return (
        <div>
            <Header course={name}/>
            <Content parts={parts} />
            <Total sum={sum} />
        </div>
    );
};

export default Course;