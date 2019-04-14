import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
    const anecdoteCount = anecdotes.length;

    const [selected, setSelected] = useState(0);
    
    const [votes, setVotes] = useState(new Array(anecdoteCount).fill(0));

    const nextAnecdote = () => {
        const max = anecdotes.length;
        const randomIndex = Math.floor(Math.random() * Math.floor(max));
        setSelected(randomIndex);
    }

    const getIndexOfMostVotes = () => {
        let index = 0;
        let currentVoteMax = votes[0];
        for (var i = 0; i < votes.length; i++) {
            const votesCount = votes[i];
            if (votesCount > currentVoteMax) {
                index = i;
                currentVoteMax = votesCount;
            }
        }
        return index;
    }

    const voteAnecdote = () => {
        const votesCopy = [...votes];
        votesCopy[selected] += 1;
        setVotes(votesCopy);
    }
    const mostVotedAnecdote = anecdotes[getIndexOfMostVotes()];
    return (
        
        <div>
            <div>
                <h1>Anecdote of the day</h1>
                <p>
                    {anecdotes[selected]}
                </p>
                <p>
                    {`Has ${votes[selected]} votes`}
                </p>
            </div>
            <div>
                <button onClick={voteAnecdote}>Vote</button>
                <button onClick={nextAnecdote}>Next anecdote</button>
            </div>
            <div>
                <h1>Anecdote with most votes</h1>
                <p>
                    {mostVotedAnecdote}
                </p>
            </div>
            
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)