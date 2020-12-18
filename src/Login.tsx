import React, { useEffect, useState } from 'react'
import FriendAdd from './FriendAdd'
import LoginInputs from './LoginInputs'
import FriendRequests from './FriendRequests'


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
          <div className="loginToggleDiv">
            <button type="button" onClick={handleToggle} className="loginToggle" >👤</button>
          </div>
          <LoginInputs login={props.login} saveUser={props.saveUser} valueUser={props.valueUser} toggleAlreadySet={toggleAlreadySent} />
          <FriendAdd setNewFriend={props.setNewFriend} />
          <FriendRequests increaseFriendsAcceptedCount={props.increaseFriendsAcceptedCount} valueUser={props.valueUser} />
        </div>
      )
    } else {
      return (
        <div className="loginDiv">
          <div className="loginToggleDiv">
            <button type="button" onClick={handleToggle} className="loginToggle" >👤</button>
          </div>
          <div className="logins">
            <FriendAdd toggleFriendAdded={props.toggleFriendAdded} setNewFriend={props.setNewFriend} user={props.valueUser} />
            <div className="friendAdd">
              <button className="logoutButton button" onClick={logOutOnClick}>Logout</button>
            </div>
            <FriendRequests increaseFriendsAcceptedCount={props.increaseFriendsAcceptedCount} valueUser={props.valueUser} />
          </div>
        </div>
      )
    }
  }
  return (
    <div className="loginToggleDiv">
      <button type="button" onClick={handleToggle} className="loginToggle" >👤</button>
    </div>
  )
}

export default Login
