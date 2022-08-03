import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      return state.map(a => a.id !== id ? a : {...a, votes: a.votes + 1})
    },
    createNew(state, action) {
      const content = action.payload
      state.push({
        content,
        votes: 0
      })
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { voteAnecdote, createNew, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer