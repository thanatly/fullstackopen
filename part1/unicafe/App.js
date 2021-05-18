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


  const handleGoodClick = () => {
    //setAll(allClicks.concat('L')) 
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    //setAll(allClicks.concat('R'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    //setAll(allClicks.concat('R'))
    setBad(bad + 1)
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
    </ul>
    </div>
  )
}

export default App