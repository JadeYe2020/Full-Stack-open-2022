import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => { 
    event.preventDefault()
    console.log('create clicked')
  
    const content = event.target.anecdote.value
    // reset the form
    event.target.anecdote.value = ''
  
    dispatch({
      type: 'anecdotes/createNew',
      payload: content
    })
    dispatch({
      type: 'notification/showMessage',
      payload: `you created a new anecdote '${content}'`
    })
    setTimeout(() => {
      dispatch({
        type: 'notification/showMessage',
        payload: ''
      })
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