import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes}) => {
    const sorted = [...anecdotes]
    sorted.sort((a, b) => b.votes - a.votes)
    return sorted
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({
      type: 'anecdotes/voteAnecdote',
      payload: id
    })
    dispatch({
      type: 'notification/showMessage',
      payload: `you voted '${anecdotes.find(a => a.id === id).content}'` 
    }) 
    setTimeout(() => {
      dispatch({
        type: 'notification/showMessage',
        payload: null
      })
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList