import React from 'react'

// const-definitions
const course = 'Half Stack application development'
  // define as Object
const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

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
      <Part part={parts[0].name} exercise={parts[0].exercises}/>
      <Part part={parts[1].name} exercise={parts[1].exercises}/>
      <Part part={parts[2].name} exercise={parts[2].exercises}/>
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
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App