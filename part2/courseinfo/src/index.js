import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {
  const parts = course.parts

  // Calculate total exercises
  // Need to specify InitialValue as 0 in reducer 
  const exTotal = parts.reduce((s, p) => s + p.exercises,0);

  // Print out Total in the console
  console.log({exTotal})

  return (
    <div>
      {parts.map(part =>
        <p key={part.id}>
        {part.name} {part.exercises}
        </p>
      )}
      <p>Total {exTotal} </p>
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

  //Check if the app is working
  console.log('App works...')

  return (
  <div>
  <Header course={course} />
  <Content course={course} />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))