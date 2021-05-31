import React from 'react'

const Filter = (props) => {
  const { newFilter, handleSearch } = props
  /* Destructuring, same as
  const newFilter = props.newFilter
  const handleSearch = props.handleSearch
  */
    return (
        <div>
          Show <input value={newFilter} onChange={handleSearch}/>
        </div>
    )
}

export default Filter