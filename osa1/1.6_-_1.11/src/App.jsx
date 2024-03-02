import { useState } from 'react'
import './App.css'
import Button from './Button/Button'
import Statistics from './Statistics/Statistics'

function App() {
  const [evaluations, setEvaluations] = useState({"good": 0, "neutral": 0, "bad": 0})
  const evaluateGood = () => setEvaluations({...evaluations, "good": evaluations.good + 1})
  const evaluateNeutral = () => setEvaluations({...evaluations, "neutral": evaluations.neutral + 1})
  const evaluateBad = () => setEvaluations({...evaluations, "bad": evaluations.bad + 1})

  return (
    <div>
      <Button onClick={evaluateGood} text="Good" hue="green" />
      <Button onClick={evaluateNeutral} text="Neutral" hue="yellow" />
      <Button onClick={evaluateBad} text="Bad" hue="red" />
      <Statistics
        good={evaluations.good}
        neutral={evaluations.neutral}
        bad={evaluations.bad} />
    </div>
  )
}

export default App
