import React, { useEffect, useState } from 'react'
import FriendAdd from './FriendAdd'
import LoginInputs from './LoginInputs'
import FriendRequests from './FriendRequests'
import LoginToggle from './LoginToggle'
import Logout from './Logout'


export const Login = (props: any) => {
  const isUserSet = localStorage.getItem("user") === "null"
  const storedUser = localStorage.getItem("user")
  console.log("Login: storedUser: ", storedUser)
  const [visible, setLoginVisibility] = useState(false)
  const [alreadySent, setAlreadySent] = useState(!isUserSet)

  useEffect(() => {
    if (storedUser != "null" && storedUser != null) {
      console.log("Login: set new user", storedUser)
      props.login(storedUser)
    }
  }, [])
  const handleToggle = () => {
    setLoginVisibility(!visible)
  }
  const toggleAlreadySent = () => {
    setAlreadySent(!alreadySent)
  }

  const logOutOnClick = () => {
    props.logOut()
    toggleAlreadySent()
  }

  if (visible) {
    console.log("Login: alreadySent, storedUser: ", alreadySent, storedUser)
    if (!alreadySent || storedUser === null) {
      return (
        <div className="loginDiv">
          <LoginToggle handleToggle={handleToggle} />
          <LoginInputs login={props.login} saveUser={props.saveUser} valueUser={props.valueUser} toggleAlreadySet={toggleAlreadySent} />
          <FriendAdd setNewFriend={props.setNewFriend} />
          <FriendRequests increaseFriendsAcceptedCount={props.increaseFriendsAcceptedCount} valueUser={props.valueUser} />
        </div>
      )
    } else {
      return (
        <div className="loginDiv">
          <LoginToggle handleToggle={handleToggle} />
          <div className="logins">
            <FriendAdd toggleFriendAdded={props.toggleFriendAdded} setNewFriend={props.setNewFriend} user={props.valueUser} />
            <Logout logOutOnClick={logOutOnClick} />
            <FriendRequests increaseFriendsAcceptedCount={props.increaseFriendsAcceptedCount} valueUser={props.valueUser} />
          </div>
        </div>
      )
    }
  }
  return (
    <LoginToggle handleToggle={handleToggle} />
  )
}

export default Login
