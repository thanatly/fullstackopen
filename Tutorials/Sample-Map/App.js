// Concept: functional programing- map
import React from 'react'

const App = (props) => {
  const { notes } = props

  return (
    // The value of the variable must be rendered inside of curly braces.
    // If not, the parameter becomes a plain text
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <li key={note.id}>
            {note.content} 
          </li>
        )}
      </ul>
    </div>
  )
}

export default App