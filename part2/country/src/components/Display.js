import React from 'react'

const Display = (props) => {
	const {searchResults} = props
	const length = searchResults.length	

	const countryName = searchResults.map(country => country.name)
	const countryCap = searchResults.map(country => country.capital)
	const countryPop = searchResults.map(country => country.population)	
	const countryLang = searchResults.map(country => (
        <ul key={country.numericCode}>
            {country.languages.map(language => 
                <li key={language.iso639_1}>{language.name}</li>
            )}
        </ul>    
    ))
	const countryFlag = searchResults.map(country => (
        <img key={country.numericCode} alt="flag" src={country.flag} width="100" height="100" />
    ))

	if (length > 10)
	{
	  return <div>Too many, be specific</div>
	}
	else if (length > 1)
	{
	  return (
	  <ul>
      	{searchResults.map(wiki=>
        <li key = {wiki.numericCode}>
         {wiki.name}
        </li>
      	)}
      </ul>
	  )
	}
	else if (length === 1)
	{
	  return (
	  	<div>
	  	<h2>{countryName}</h2>
	  	<div>Capital: {countryCap}</div>
	  	<div>Population: {countryPop}</div>
	  	<h3>Languages</h3>
	  	<div>{countryLang}</div>
	  	<div>{countryFlag}</div>
	  	</div>
	  )
	}
	else
	{
	  return <div>No result</div>
	}
}

export default Display