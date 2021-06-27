import React from 'react'

const Display = (props) => {
	const {person, removeContact} = props
		
return(
      <li className='list'>
        {person.name} {person.number}
        <button onClick={removeContact}>delete</button>
      </li>
)
}

export default Display