import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    clearNotification(state, action) {
      return ''
    },
    setMessage(state, action) {
      return action.payload
    }
  } 
})

export const { setMessage, clearNotification } = notificationSlice.actions

export const setNotification = (message, time) => {
  return dispatch => {
    dispatch(setMessage(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 1000 * time)
  }
}

export default notificationSlice.reducer