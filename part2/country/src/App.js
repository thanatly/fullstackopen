import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Display from './components/Display'

const App =() => {
   const [wikis, setWikis] = useState([])

   const [ newFilter, setNewFilter ] = useState('')

  // Load county data
   useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setWikis(response.data)
      })
    }, [])

  //Filter
  const handleSearch = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    }

  //Search result
  const searchResults = wikis.filter(wiki => wiki.name.includes(newFilter))  

  return (
    <div>
      <h1>Country Wiki</h1>
      <Filter newFilter={newFilter} handleSearch={handleSearch} />
      <Display searchResults={searchResults} />
    </div>
  );
}

export default App;
