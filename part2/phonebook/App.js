import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Display from './components/Display'
import personService from './services/persons'
import { Success, Failure } from './components/Notification'


const App = () => {
  const [ persons, setPersons ] = useState([]) 

  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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
    number: newNum
  }

  if (persons.map(person => person.name).includes(newName))
  {
    if(window.confirm(`${newName} is already added to phonebook, overwrite?`))
    {
      const updatePerson = persons.find(n => n.name === newName)
      const updateId = updatePerson.id
      console.log(updateId)

      //Overwrite
      personService
      .update(updateId, newObject)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== updateId ? person : returnedPerson ))
      })
      .catch(error => {
      setErrorMessage(
          `'${newName}' has already been removed from the derver`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000) 
      })
    }
  }
  else
  {
    //Create
    personService
    .create(newObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNum('')
      setSuccessMessage(
          `Added '${newName}'`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)  
    })
    .catch(error => {
      // this is the way to access the error message
      console.log(error.response.data.error)
      setErrorMessage(`'${error.response.data.error}'`)
  })
}
}

// Contact deletion
const removeContact = (id) => {

  const delPerson = persons.find(n => n.id === id)

  if (window.confirm(`Delete ${delPerson.name} ?`)){
    personService
    .remove(id)
    .then(() => {
        setPersons(persons.filter(person=>person.id !== id ))
      })
    }
}

// Searching
const searchResults = persons.filter(person => person.name.includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Success message={successMessage} />
      <Failure message={errorMessage} />  
      <Filter newFilter={newFilter} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm addContact={addContact} newName={newName} 
        newNum={newNum} handleNameChange={handleNameChange} handleNumChange={handleNumChange}
      />
      <h3>Numbers</h3>
      <div>
      <ul>
      {searchResults.map(person=>
        <Display
          key={person.id} 
          person={person} 
          removeContact={() => removeContact(person.id)}
        />
      )}
      </ul>
      </div>
    </div>
  )
}

export default App