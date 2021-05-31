import React from 'react'
  const PersonForm = (props) => {
    const {addContact, newName, newNum, handleNameChange, handleNumChange} = props

    return(
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
    )
  }

export default PersonForm