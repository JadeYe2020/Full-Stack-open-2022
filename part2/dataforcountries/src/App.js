import { useState, useEffect } from 'react'

import axios from "axios";

const Country = ({country}) => {
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

const Display = ({matches}) => {
  if (matches.length > 10) {    
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if (matches.length > 1) {
    return (
      matches.map(match => <div key={match.name.common}>{match.name.common}</div>)
    )
  } else if (matches.length > 0) {    
    return (<Country country={matches[0]} />)
  }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data) 
      })    
  }, [])

  const handleQueryChange = (event) => setQuery(event.target.value)

  const matches = countries.filter(country =>     
    country.name.common.toLowerCase().includes(query.toLowerCase())
  )

  console.log("matches", matches);

  return (
    <div>
      <div>
        find countries<input value={query} onChange={handleQueryChange} />
      </div>
      <Display matches={matches} />
    </div>
  );
}

export default App;