import PersonDetails from "./PersonDetails";

const Persons = ({persons, deletePersonItem}) => {
  return (
    <div>
      {persons.map((person) => 
                      <PersonDetails key={person.id} person={person}
                        deletePersonItem={() => deletePersonItem(person.id)} />)}
    </div>
  )
}

export default Persons