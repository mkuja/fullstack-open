import { useEffect, useState } from 'react'

const App = () => {
  const _anecdotes = [
    {value: 'If it hurts, do it more often.', votes: 0},
    {value: 'Adding manpower to a late software project makes it later!', votes: 0},
    {value: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
    {value: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
    {value: 'Premature optimization is the root of all evil.', votes: 0},
    {value: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0},
    {value: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.', votes: 0},
    {value: 'The only way to go fast, is to go well.', votes: 0},
  ]
   
  const [selected, setSelected] = useState(0)
  const [anecdotesWithVotes, setAnecdotesWithVotes] = useState(_anecdotes)
  const [mostVoted, setMostVoted] = useState({votes: 0})

  useEffect(() => {
    const _mostVoted = anecdotesWithVotes.reduce((prev, current) => (prev.votes > current.votes) ? prev : current)
    setMostVoted(_mostVoted)
  }, [anecdotesWithVotes])

  const randomPick = () => {
    setSelected(Math.floor(Math.random() * anecdotesWithVotes.length))
  }
  const voteSelected = () => {
    setAnecdotesWithVotes(
      anecdotesWithVotes.map((anecdote, index) => {
        console.log(index, selected)
        if (index === selected) {
          return {
            ...anecdote,
            votes: anecdote.votes + 1
          }
        }
        return anecdote
      })
    )
  }

  return (
    <>
    <div>
      <p>{anecdotesWithVotes[selected].value}</p>
      <p>Votes: {anecdotesWithVotes[selected].votes}</p>
      <button onClick={voteSelected}>Vote anecdote</button>
      <button onClick={randomPick}>Next anecdote</button>
    </div>
    {mostVoted.votes ?
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{mostVoted.value + ` (${mostVoted.votes} votes)`}</p>
    </div>
    : null}
    </>
  )
}

export default App
