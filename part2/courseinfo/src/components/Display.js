import React from 'react'
//needs to move search to main app because we wanna pass id along??

const Display = (props) => {
	const {person, removeContact} = props
		
return(
      <li className='list'>
        {person.name} {person.num}
        <button onClick={removeContact}>delete</button>
      </li>
)
}

export default Display