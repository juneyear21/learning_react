import React, { useState } from 'react'

const Counter = () => {
    
    const [count,setCount] = useState(0)
    const Increment =()=>{setCount(count+1)}
    const Decrement =()=>{setCount(count-1)}

  return (
    <div>
        <h2>This is a counter: {count}</h2>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
    </div>
  )
}

export default Counter