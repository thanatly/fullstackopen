// Unicafe
import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  //Helper component
  const all = () => props.good + props.neutral + props.bad

  if (all() === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
    <ul>
      <li> Good: {props.good} </li>
      <li> Neutral: {props.neutral} </li>
      <li> Bad: {props.bad} </li>
      <li> All: {all()} </li>
      <li> Average: {(props.good - props.bad)/all()} </li>
      <li> Positive: {100*props.good/all()} % </li>    
    </ul>  
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // I feel like there is a better solution than setting new states :/
  const [allClicks, setAll] = useState([])

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
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

export default App