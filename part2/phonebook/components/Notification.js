import React from 'react'

const Success = ({ message }) => {
  const successStyle = {
    color: 'green',
  	background: 'lightgrey',
  	fontSize: 20,
  	borderStyle: 'solid',
  	borderRadius: 5,
  	padding: 10,
  	marginBottom: 10,
  } 


  if (message === null) {
    return null
  }

  return (
    <div style={successStyle}>
      {message}
    </div>
  )
}

const Failure = ({ message }) => {
  const failureStyle = {
    color: 'red',
  	background: 'lightgrey',
  	fontSize: 20,
  	borderStyle: 'solid',
  	borderRadius: 5,
  	padding: 10,
  	marginBottom: 10,
  } 


  if (message === null) {
    return null
  }

  return (
    <div style={failureStyle}>
      {message}
    </div>
  )
}

export {
	Success,
	Failure,
}