import React, { useState } from 'react'
import FriendAdd from './FriendAdd'
import LoginInputs from './LoginInputs'


export const Login = (props: any) => {
  const isSet = localStorage.getItem("user") === "null"
  const storedUser = localStorage.getItem("user")
  const [visible, setLoginVisibility] = useState(false)
  const [alreadySent, setAlreadySent] = useState(!isSet)

  props.storeUser(storedUser)
  const handleToggle = () => {
    setLoginVisibility(!visible)
  }
  const toggleAlreadySent = () => {
    setAlreadySent(!alreadySent)
  }

  const logOutOnClick = () => {
    localStorage.removeItem("user")
    props.logOut()
    toggleAlreadySent()
  }

  if (visible) {
    console.log("Login: alreadySent, storedUser: ", alreadySent, storedUser)
    if (!alreadySent || storedUser === "undefined") {
      return (
        <div className="loginDiv">
          <div className="loginToggle">
            <button type="button" onClick={handleToggle} className="loginToggle" >Toggle</button>
          </div>
          <LoginInputs login={props.login} saveUser={props.saveUser} valueUser={props.valueUser} toggleAlreadySet={toggleAlreadySent} />
          <FriendAdd setNewFriend={props.setNewFriend} />
        </div>
      )
    } else {
      return (
        <div className="loginDiv">
          <div className="loginToggle">
            <button type="button" onClick={handleToggle} className="loginToggle" >Toggle</button>
          </div>
          <div className="logins">
            <FriendAdd toggleFriendAdded={props.toggleFriendAdded} setNewFriend={props.setNewFriend} user={props.valueUser} />
            <button className="logoutButton" onClick={logOutOnClick}>Logout</button>
          </div>
        </div>
      )
    }
  }
  return (
    <div className="loginToggle">
      <button type="button" onClick={handleToggle} className="loginToggle" >Toggle</button>
    </div>
  )
}

export default Login
