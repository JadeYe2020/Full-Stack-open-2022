const PersonDetails = ({person, deletePersonItem}) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={deletePersonItem}>delete</button>
    </div>
  )
}

export default PersonDetails