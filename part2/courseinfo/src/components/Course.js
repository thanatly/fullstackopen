// New module 
import React from 'react'

const Course = ({ course }) => {
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

export default Course 