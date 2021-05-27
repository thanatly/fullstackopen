// Part2 ex 2.6-2.10

import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', num: '040-123456' },
    { name: 'Ada Lovelace', num: '39-44-5323523' },
    { name: 'Dan Abramov', num: '12-43-234345' }
  ]) 

  const personsName = persons.map(person => person.name)

  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const addContact = (event) => {
  event.preventDefault()

  const newObject = {
    name: newName,
    num: newNum
  }

  if (personsName.includes(newName))
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

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleSearch = (event) => {
    setNewFilter(event.target.value)

  }

  const searchResult = persons.filter(person => person.name.startsWith(newFilter))
  console.log(newFilter)
  console.log(searchResult)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          Filter show with: 
          <input
            value={newFilter}
            onChange={handleSearch}
          />
      </div>
      <h2>Add a new</h2>
      <form onSubmit = {addContact} >
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input 
            value={newNum}
            onChange={handleNumChange}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>All numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.name}> {person.name} {person.num} </li>
        )}
      </ul>
      <h2>Search result</h2>
      <ul>
        {searchResult.map(person => 
          <li key={person.name}> {person.name} {person.num} </li>
        )}
      </ul>

    </div>

  )

}

export default App