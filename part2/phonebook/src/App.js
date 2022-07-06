import { useState, useEffect } from 'react'
import phonebookService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const Notification = ({message, type}) => {
  if (message === null) {
    return null
  }

  return (
    <div className='notification' style={type}>
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [keyword, setKeyword] = useState('')
  const [notificationMsg, setNotificationMsg] = useState(null)
  const [messageStyle, setMessageStyle] = useState(null)

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialData => {
        setPersons(initialData)
      })
  }, [])

  const successfulStyle = {
    color: "green",
    background: "lightgray",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  const errorStyle = {...successfulStyle, color: "red"}

  const addPerson = (event) => {
    event.preventDefault()
    
    const duplicateName = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())

    if (!duplicateName) {
      const newPerson = {
        name: newName,
        number: newNum,
      }

      phonebookService.addPerson(newPerson)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson))
          setNewName('')
          setNewNum('')

          setNotificationMsg(`Added ${addedPerson.name}`)
          setMessageStyle(successfulStyle)

          setTimeout(() => {
            setNotificationMsg(null)
            setMessageStyle(null)
          }, 5000)
        })
    } else {
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`)
      
      if (confirmUpdate) {
        const personWithNewNum = {...duplicateName, number: newNum}

        phonebookService
          .updateNum(duplicateName.id, personWithNewNum)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== duplicateName.id ? person : updatedPerson))
            setNewName('')
            setNewNum('')

            setNotificationMsg(`Updated ${updatedPerson.name}'s number`)
            setMessageStyle(successfulStyle)

            setTimeout(() => {
              setNotificationMsg(null)
              setMessageStyle(null)
            }, 5000)
          })
          .catch(error => {
            setNotificationMsg(`Information of ${duplicateName.name} has already been removed from server`)
            setPersons(persons.filter(person => person.id !== duplicateName.id))
    
            setMessageStyle(errorStyle)
            setTimeout(() => {
              setNotificationMsg(null)
              setMessageStyle(null)
            }, 5000)
          })
      }
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

  const deletePersonItem = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    const confirmDelete = window.confirm(`Delete ${personToDelete.name} ?`)

    if (confirmDelete) {

      phonebookService.deletePerson(id)
      .then(deletedPerson => {
        setPersons(persons.filter(person => person.id !== id))
      })

    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMsg} type={messageStyle} />
      <Filter keyword={keyword} onFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm  onSubmit={addPerson} onNameInputChange={handleNameInputChange} 
        onNumInputChange={handleNumInputChange} newName={newName} newNum={newNum} />

      <h3>Numbers</h3>
      <Persons persons={personsToShow} deletePersonItem={deletePersonItem} />
    </div>
  )
}

export default App