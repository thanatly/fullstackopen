import React, { useState , useEffect } from 'react'
import axios from 'axios'

const Display = (props) => {
	const {searchResults,newFilter,setNewFilter} = props
	const length = searchResults.length	

	//Basic info
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

	//Weather info
	const [weather, setWeather] = useState('')
	const baseUrl='http://api.weatherstack.com/current'
	
	// Variable api_key has now the value set in startup
	// Run REACT_APP_API_KEY='YOUR_KEY' npm start // For Linux/macOS Bash
    const api_key = process.env.REACT_APP_API_KEY 

    useEffect(() => {
    axios
      .get(`${baseUrl}?access_key=${api_key}&query=${countryName[0]}`)
      .then(response => {
        setWeather(response.data)
      })
    }, [countryName[0]])

	//Display elements
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
         <button onClick={() => setNewFilter(wiki.name)}>show</button>
        </li>
      	)}
      </ul>
	  )
	}
	else if (length === 1 
		|| newFilter  === searchResults.filter(country => country.name))
	{
	  return (
	  	<div>
	  	<h2>{countryName}</h2>
	  	<div>Capital: {countryCap}</div>
	  	<div>Population: {countryPop}</div>
	  	<h3>Languages</h3>
	  	<div>{countryLang}</div>
	  	<div>{countryFlag}</div>
	  	<h3>Weather in {countryCap}</h3>
	  	<div>temperature: {weather.current.temperature} </div>
	  	<img key={weather.location.name} alt="icon" src={weather.current.weather_icons} width="100" height="100" />
	  	<div>wind: {weather.current.wind_speed}</div>
	  	</div>
	  )
	}
	else
	{
	  return <div>No result</div>
	}
}

export default Display