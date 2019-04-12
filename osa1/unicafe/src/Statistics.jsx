import React from 'react';

const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{`${text}`}</td>
            <td>{`${value}`}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad, sum, average, positivePercentage }) => {

    const hasStats = () => {
        return Boolean(good || neutral || bad);
    }

    return (
        <React.Fragment>
            <h1>Statistiikka</h1>
            {hasStats() &&
                <table style={{ marginTop: '10px' }}>
                    <Statistic text='Hyvä' value={good} />
                    <Statistic text='Neutraali' value={neutral} />
                    <Statistic text='Huono' value={bad} />
                    <Statistic text='Yhteensä' value={sum} />
                    <Statistic text='Keskiarvo' value={average} />
                    <Statistic text='Positiivisia' value={`${positivePercentage}%`} />
                </table>
            }
            {!hasStats() &&
                <div>
                    Ei yhtään palautetta annettu.
                </div>
            }
        </React.Fragment>
    )
}

export default Statistics;
