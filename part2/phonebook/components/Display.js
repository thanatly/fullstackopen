import React from 'react'

const Display = (props) => {
	const {newFilter, persons} = props
	
	const searchResults = persons.filter(person => person.name.includes(newFilter))
	return(
	 <div>
	  <ul>
        {searchResults.map(person => 
          <li key={person.name}> {person.name} {person.num} </li>
        )}
      </ul>
     </div>	
)
}

export default Display
