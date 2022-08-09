import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: '',
  timeoutID: null
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage(state, action) {
      return { ...state, message: action.payload }
    },
    updateTimeout(state, action) {
      return { ...state, timeoutID: action.payload }
    },
    resetTimeout(state, action) {
      if (state.timeoutID) {
        clearTimeout(state.timeoutID)
        return { ...state, timeoutID: null }
      }      
    }
  } 
})
export const { setMessage, updateTimeout, resetTimeout } = notificationSlice.actions

export const setNotification = (message, time) => {
  return dispatch => {
    dispatch(setMessage(message))
    // set new timeout and assign the id to a variable
    let timeoutID = setTimeout(() => {
      dispatch(setMessage(''))
    }, 1000 * time)

    dispatch(updateTimeout(timeoutID))
  }
}

export default notificationSlice.reducer