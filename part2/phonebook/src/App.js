import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [keyword, setKeyword] = useState('')

  const addPerson = (event) => {
    event.preventDefault() 

    if (persons.find((person) => person.name === newName )) {
      alert(newName + " is already added to phonebook")
    } else {
      const newPerson = {
        name: newName,
        number: newNum,
      }
  
      setPersons(persons.concat(newPerson))
      setNewName('')
    }    
  }

  const personsToShow = keyword ? persons.filter(person => person.name.toLowerCase().includes(keyword.toLowerCase()))
   : persons

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumInputChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter keyword={keyword} onFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm  onSubmit={addPerson} onNameInputChange={handleNameInputChange} onNumInputChange={handleNumInputChange} />

      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App