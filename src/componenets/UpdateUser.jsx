import React from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
    const {name,setName} = React.useContext(UserContext)
    const [inputValue, setInputValue] = React.useState(name)

    const updateName = (inputValue) =>{
        setName(inputValue)
    }
  return (
    <div>
        <input
        type="text"
        value={inputValue} 
        onChange={e =>{setInputValue(e.target.value)}}
        placeholder="Name Chnage kar"/>
        <button onClick={()=>{updateName(inputValue)}}>Update User</button>
    </div>
  )
}

export default UpdateUser
