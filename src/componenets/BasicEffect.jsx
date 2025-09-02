import React from 'react'

const BasicEffect = () => {

    React.useEffect(()=>{
        console.log("when it’s rendered the first time")
    },[]);
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect