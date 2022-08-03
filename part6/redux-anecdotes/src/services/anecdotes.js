import axios from "axios";

const basicUrl = "http://localhost:3001/anecdotes"

const getAll = async () => {
  const response = await axios.get(basicUrl)
  return response.data
}

const addNew = async (content) => {
  const newAnecdote = {
    content,
    votes: 0
  }
  const response = await axios.post(basicUrl, newAnecdote)
  return response.data
}

export default { getAll, addNew }