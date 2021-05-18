// Unicafe
import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // I feel like there is a better solution than setting new states :/
  const [score, setScore] = useState(0) 
  const [click, setClick] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
    setScore(score + 1)
    setClick(click + 1)

  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setClick(click + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setScore(score - 1)
    setClick(click + 1)
  }

 
  return (
    <div>
    <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
    <h2>Statistics</h2>
    <ul>
      <li> Good: {good} </li>
      <li> Neutral: {neutral} </li>
      <li> Bad: {bad} </li>
      <li> All: {click} </li>
      <li> Average: {score/click} </li>
      <li> Positive: {100*good/click} % </li>
    </ul>
    </div>
  )
}

export default App