import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'   
  ]  
  const initialVote = new Array(anecdotes.length).fill(0)

  const [vote, setVote] = React.useState(initialVote);

  const [selected, setSelected] = useState(0)

  const randomText = () =>{ 
    const randomNumber = Math.floor(Math.random() * anecdotes.length);

    setSelected(randomNumber)
  }

  const clickVote = () => { 
    const updatedVote = [...vote]
    updatedVote[selected]+= 1 
    setVote(updatedVote)
  }

  const Popular = () => {
    const indexOfMaxValue = vote.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

    return(
    <div>
    {anecdotes[indexOfMaxValue]} has {vote[indexOfMaxValue]} votes
    </div>
    )
  }

  return (
    <div>
    <h1> Annecdote of the day </h1>
    <p>
      {anecdotes[selected]}
    </p>
    <p>
      has {vote[selected]} votes
    </p> 
    <Button handleClick={clickVote} text= "Vote" />
    <Button handleClick={randomText} text= "Next" />
    
    <h1> Most popular annecdote</h1>
    <Popular />
    </div>
  )
}

export default App 