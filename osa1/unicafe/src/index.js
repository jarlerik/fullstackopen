import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './Statistics';
import Button from './Button';


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const sum = good + neutral + bad;

    const getAverage = () => {
        const goodValue = good * 1;
        const badValue = bad * -1;
        const average= (goodValue + badValue) / sum;
        return average || 0
    }

    const positivePercentage = ((good / sum) || 0) * 100;

    return (
        <div>
           <h1>Anna palautetta</h1>
           <div style={{marginBottom: '10px'}}>
                <Button eventHandler={setGood} value={good} text='Hyvä' />
                <Button eventHandler={setNeutral} value={neutral} text='Neutraali' />
                <Button eventHandler={setBad} value={bad} text='Huono' />
           </div>
           <Statistics good={good} neutral={neutral} bad={bad} sum={sum} average={getAverage()} positivePercentage={positivePercentage} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)