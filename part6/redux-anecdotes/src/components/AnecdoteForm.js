import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => { 
    event.preventDefault()  
    const content = event.target.anecdote.value
    // reset the form
    event.target.anecdote.value = ''
 
    dispatch(createNew(content))
    dispatch(setNotification(`you created a new anecdote '${content}'`, 5))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={e => addAnecdote(e)}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm 