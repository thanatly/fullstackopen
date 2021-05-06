import React from 'react'

// const-definitions
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = (props) => {
  return (
    <div>
      <p>
        Welcome to {props.course}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        Part: {props.part} has {props.exercise} exercises.
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        The course has {props.total} exercises.
      </p>
    </div>
  )
}

const App = () => {


  return (
    <div>
      <h1>Hi there!</h1>
      <Header course={course}/>
      <Content />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App