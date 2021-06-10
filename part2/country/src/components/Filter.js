import React from 'react'

const Filter = (props) => {
  const { newFilter, handleSearch } = props
    return (
        <div>
          find countries <input value={newFilter} onChange={handleSearch}/>
        </div>
    )
}

export default Filter