// Fetch persons from jsondb

import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Display from './components/Display'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons ] = useState([]) 

  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')


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
    personService
    .create(newObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNum('')
    })
  }
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