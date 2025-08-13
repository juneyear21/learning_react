const UserStatus = ({loggedIn,isAdmin}) => {
    let message
    loggedIn && isAdmin ? message = "Welcome Admin": message ="Welcome User"
    return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default UserStatus