import React from "react";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => { 
    const [name,setName] = React.useState("Rahul Chauhan");
    
    return(
        <UserContext.Provider value={{name,setName}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;