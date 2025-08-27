import React from 'react';
const App = () => { 
  const [count,setCount] = React.useState(null);
   const [intervalId, setIntervalId] = React.useState(null);
   const Start = () =>{ 
    if(!intervalId){ 
      const id = setInterval(()=>{ 
        setCount(new Date().toLocaleTimeString()); },1000);
         setIntervalId(id) } }; 
  const PR = ()=>{ 
    if(intervalId !== null){
      clearInterval(intervalId); 
    setIntervalId(null);
    }else{
     Start();
  }
  } 
  const Reset = () =>{ setCount(0); clearInterval(intervalId); 
    setIntervalId(null); } 
  React.useEffect(()=>{ return () =>{ clearInterval(intervalId) } },[intervalId]);
  return ( 
  <div> 
    <h2>{count}</h2> 
    <button onClick={Start}>Start</button> 
    <button onClick={PR}>Pause/Resume</button> 
    <button onClick={Reset}>Reset</button> 
  </div> ) };
export default App