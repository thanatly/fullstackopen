import React from 'react'
//needs to move search to main app because we wanna pass id along??

const Display = (props) => {
	const {person, removeContact} = props
		
return(
      <div>
        {person.name} {person.num}
        <button onClick={removeContact}>delete</button>
      </div>
)
}

export default Display