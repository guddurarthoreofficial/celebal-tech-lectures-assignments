import React from 'react'
import CounterApp from './components/counterApp'
import CounterContextProvider from './context/CounterContextProvider'

const App = () => {
  return (
    <CounterContextProvider>
      <CounterApp />
    </CounterContextProvider>
  )
}

export default App
