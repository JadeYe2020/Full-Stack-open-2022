import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const filtered = anecdotes.filter(a => a.content.includes(filter))
    const sorted = filtered.sort((a, b) => b.votes - a.votes)
    return sorted
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    dispatch(setNotification(`you voted '${anecdotes.find(a => a.id === id).content}'`, 5))
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