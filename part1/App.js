import React from 'react'

// const-definitions
const course = 'Half Stack application development'
  // define as Object
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

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
      <Part part={part1.name} exercise={part1.exercises}/>
      <Part part={part2.name} exercise={part2.exercises}/>
      <Part part={part3.name} exercise={part3.exercises}/>
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
      <Header course={course}/>
      <Content />
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App