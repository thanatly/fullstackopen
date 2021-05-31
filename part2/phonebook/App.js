// Passing components in React only go one way, parent--> child
// Solve by using props

import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Display from './components/Display'

// All objects that need to be passed down 
// --> define in App
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', num: '040-123456' },
    { name: 'Ada Lovelace', num: '39-44-5323523' },
    { name: 'Dan Abramov', num: '12-43-234345' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
    }

  const handleSearch = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    }

// Contact addition
const addContact = (event) => {
  event.preventDefault()

  const newObject = {
    name: newName,
    num: newNum
  }

  if (persons.map(person => person.name).includes(newName))
  {
    window.alert(`${newName} is already added to phonebook`)
  }
  else
  {
    setPersons(persons.concat(newObject))
  }

  setNewName('')
  setNewNum('')
  
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm addContact={addContact} newName={newName} 
        newNum={newNum} handleNameChange={handleNameChange} handleNumChange={handleNumChange}
      />
      <h3>Numbers</h3>
      <Display newFilter={newFilter} persons={persons}/>
    </div>
  )

}

export default App