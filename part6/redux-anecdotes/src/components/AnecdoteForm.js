import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import { showMessage } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => { 
    event.preventDefault()  
    const content = event.target.anecdote.value
    // reset the form
    event.target.anecdote.value = ''

    const newAnecdote = await anecdoteService.addNew(content)
  
    dispatch(createNew(newAnecdote))
    dispatch(showMessage(`you created a new anecdote '${content}'`))
    setTimeout(() => {
      dispatch(showMessage(''))
    }, 5000)
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