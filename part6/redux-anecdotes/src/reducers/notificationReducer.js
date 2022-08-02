import { createSlice } from '@reduxjs/toolkit'

const initialState = 'initial msg'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showMessage(state, action) {
      const id = action.payload
      const anecdoteToShow = state.find(n => n.id === id)
      return `you voted '${anecdoteToShow}'`
    }
  }
})

export const { showMessage } = notificationSlice.actions
export default notificationSlice.reducer