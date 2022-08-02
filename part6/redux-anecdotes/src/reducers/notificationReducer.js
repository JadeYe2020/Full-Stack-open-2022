import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showMessage(state, action) {
      return action.payload
    }
  }
})

export const { showMessage } = notificationSlice.actions
export default notificationSlice.reducer