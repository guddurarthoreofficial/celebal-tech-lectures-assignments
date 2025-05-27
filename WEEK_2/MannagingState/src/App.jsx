import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementHandler = () => {
    setCount(count + 1);
  }

  const decrementHandler = () => {
    setCount(count - 1);
  }

  const setToZerohandler = () => {
    setCount(0);
  }


  return (
    <>
      <div style={{ alignItems: "center" }}>

        <button onClick={incrementHandler}>
          Increment
        </button>

        <button onClick={setToZerohandler}>
          Set To Zero
        </button>

        <button onClick={decrementHandler}>
          Decerement
        </button>
        <div><h1>{count}</h1></div>


      </div>

    </>
  )
}

export default App
