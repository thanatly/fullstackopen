import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {
  const parts = course.parts

  return (
    <div>
      <ul>
      {parts.map(part =>
        <li key={part.id}>
        {part.name} {part.exercises}
        </li>
      )}
      </ul>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  console.log('App works...')

  return (
  <div>
  <Header course={course} />
  <Content course={course} />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))