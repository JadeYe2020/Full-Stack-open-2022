import { connect } from "react-redux"
import { filterList } from "../reducers/filterReducer"

const Filter = (props) => {

  const handleChange = (event) => {
    props.filterList(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  filterList
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter