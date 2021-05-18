// Unicafe
import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stat = (props) => (
  <p> {props.text}
  {props.value} </p>
)


const Statistics = (props) => {
  //Helper component
  const all = () => props.good + props.neutral + props.bad
  const score = () => props.good - props.bad

  if (all() === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <Stat text="Good: " value={props.good}/>
      <Stat text="Neutral: " value={props.neutral}/>
      <Stat text="Bad: " value={props.bad}/>
      <Stat text="All: " value={all()}/>
      <Stat text="Average: " value={score()/all()}/>
      <Stat text="Positive: " value={100*props.good/all() +"%"}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

 
  return (
    <div>
    <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
    <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App