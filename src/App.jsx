import React from 'react'
import UserProvider, { UserContext } from './componenets/UserContext'
import UserProfile from './componenets/UserProfile'
import UpdateUser from './componenets/UpdateUser'

const App = () => {
return (
    <UserProvider>
      <div>
        <h1>My App</h1>
        <UserProfile />
        <UpdateUser />
      </div>
    </UserProvider>
  );
}

export default App