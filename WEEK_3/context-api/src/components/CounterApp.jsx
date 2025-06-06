import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContextProvider'

const CounterApp = () => {
    const {count, setCount} = useContext(CounterContext)
  return (
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={() => setCount(count + 1)}> Increment</button>
        <button onClick={() => setCount(0)}> Reset </button>
        <button onClick={() => setCount(count - 1)}> Increment</button>
    </div>
  )
}

export default CounterApp
