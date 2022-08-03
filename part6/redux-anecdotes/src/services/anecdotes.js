import axios from "axios";

const basicUrl = "http://localhost:3001/anecdotes"

const getAll = async () => {
  const response = await axios.get(basicUrl)
  return response.data
}

export default { getAll }