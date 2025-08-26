import React from 'react'

const App = () => {
  const [count,setCount] = React.useState(null);
  const [intervalId, setIntervalId] = React.useState(null);

  const Start = () =>{
     if(!intervalId){
      const id = setInterval(()=>{
        setCount(new Date().toLocaleTimeString());
      },1000)
      setIntervalId(id)
     }
  };

  const Stop = ()=>{
    clearInterval(intervalId);
    setIntervalId(null);
  }

  const Reset = () =>{
    setCount(0);
    Stop();
  }

  React.useEffect(()=>{
    return () =>{
      clearInterval(intervalId)
    }
  },[intervalId])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App