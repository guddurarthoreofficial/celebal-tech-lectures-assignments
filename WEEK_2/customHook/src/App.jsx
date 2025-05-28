import { useState } from 'react'
import './App.css'
import useCount from './useCount'

function App() {
  const {count,increment,decrement,reset} = useCount(0);
  return (
    <>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>

    <h1>{count}</h1>
    </>
  )
}

export default App
