import { useState, useEffect } from 'react'

import axios from "axios";

const CountryItem = ({country, handleOnClick}) => {
  return (
    <div>
      {country.name.common} <button onClick={handleOnClick}>show</button>
    </div>
  )
}

const CountryDetails = ({country, matches}) => {
  if (matches.length === 1) {
    country = matches[0]
  }
  
  if (country) {
    const languages = Object.values(country.languages)  

    return (
      <div>      
        <h1>{country.name.common}</h1>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>

        <h2>languages:</h2>
        <ul>
          {languages.map(lang => <li key={lang}>{lang}</li>)}
        </ul>

        <img src={country.flags.png} alt="flag" />
      </div>
    )
  }  
}

const Display = ({matches, handleOnClick}) => {
  if (matches.length > 10) {    
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if (matches.length > 1) {
    return (
      matches.map(match => 
        <CountryItem key={match.name.common} country={match} handleOnClick={(e) => handleOnClick(match, e)} />
        )      
    )
  }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")

  const [countryToShow, setCountryToShow] = useState(null)

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data) 
      })    
  }, [])

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
    // reset details section
    setCountryToShow(null)
  }

  const handleOnClick = (toShow) => {
    console.log("onClick", toShow);
    setCountryToShow(toShow)
  }

  const matches = countries.filter(country =>     
    country.name.common.toLowerCase().includes(query.toLowerCase())
  )

  console.log("matches", matches);

  return (
    <div>
      <div>
        find countries<input value={query} onChange={handleQueryChange} />
      </div>
      <Display matches={matches} handleOnClick={handleOnClick} />
      <CountryDetails matches={matches} country={countryToShow} />
    </div>
  );
}

export default App;