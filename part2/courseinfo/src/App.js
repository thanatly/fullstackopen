// Concept: functional programing- map
import React from 'react'
// Import from a new module
import Course from './components/Course'

const App = ({ courses }) => {

  return (
    <div>
      {courses.map((course,index) => <Course course={course} 
        key={course.id}/>)
      }  
    </div>
  )
}

export default App