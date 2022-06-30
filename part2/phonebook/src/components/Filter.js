const Filter = (props) => {
  return (
    <div>
      filter shown with <input value={props.keyword} onChange={props.onFilterChange} />
    </div>
  )
}

export default Filter