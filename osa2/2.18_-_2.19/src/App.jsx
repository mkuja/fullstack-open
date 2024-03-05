import { useState } from 'react'
import './App.css'
import FindCountries from './FindCountries/FindCountries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FindCountries />
    </>
  )
}

export default App
