import React, { useState } from 'react'

const useCount = (initialVal = 0) => {

    const [count ,setCount] = useState(initialVal);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return {count, increment, decrement, reset}
}

export default useCount;