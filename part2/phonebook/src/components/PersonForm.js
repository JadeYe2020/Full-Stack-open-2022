const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        name: <input onChange={props.onNameInputChange} value={props.newName} />
      </div>
      <div>
        number: <input onChange={props.onNumInputChange} value={props.newNum} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm