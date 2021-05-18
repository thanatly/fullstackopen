import React from 'react'

// const-definitions
const course = {
    name: 'Half Stack application development',
    parts: [
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
 }   

const Header = (props) => {
  return (
    <div>
      <p>
        Welcome to {course.name}
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
      <Part part={course.parts[0].name} exercise={course.parts[0].exercises}/>
      <Part part={course.parts[1].name} exercise={course.parts[1].exercises}/>
      <Part part={course.parts[2].name} exercise={course.parts[2].exercises}/>

    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        The course has {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} exercises.
      </p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App