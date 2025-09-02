import React, { useEffect } from 'react'

const CounterEffect = () => {
    const [count,setCount] = React.useState(0);
    useEffect(()=>{
        document.title = `Title ${count}`;
    },[count])

    const Increment = () =>{
        setCount(p=>p+1)
    }

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={Increment}>Click</button>
    </div>
  )
}

export default CounterEffect