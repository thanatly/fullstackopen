import React from 'react';
import ReactDOM from 'react-dom';


const Content = ({ course }) => {
  const headers = course.name
  const parts = course.parts
  const exTotal = parts.reduce((s, p) => s + p.exercises,0);

  return (
    <div>
      <h1>{headers}</h1>
      {parts.map(part =>
        <p key={part.id}>
        {part.name} {part.exercises}
        </p>
      )}
      <p>Total {exTotal} </p>
    </div>
  )
}

// Iterate over an array of courses
const Display = ({ courses }) => {
    return(
      courses.map((course,index) => <Content course={course} 
        key={course.id}/>)
      )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  //Check if the app is working
  console.log('App works...')

  return (
  <div>
  <Display courses={courses}/>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))