// Concept: functional programing- map
import React from 'react'

// Seperate into another component
const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

// Destructuring
const App = ({ notes }) => {
  return (
    // The key attribute must now be defined for the Note components
    // Not for the li tags like before
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App