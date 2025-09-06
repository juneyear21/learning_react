import React from "react";
import UserProvider, { UserContext } from "./UserContext";

const UserProfile = () => {
    const {name,setName} = React.useContext(UserContext);
    return(
        <div>
            <h1>User: {name}</h1>
        </div>
    )
};

export default UserProfile;