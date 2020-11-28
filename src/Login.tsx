import React, { useState } from 'react'
import FriendAdd from './FriendAdd'
import LoginInputs from './LoginInputs'


export const Login = (props: any) => {

  const isSet = localStorage.getItem("user") === "undefined"
  const storedUser = localStorage.getItem("user")
  const [visible, setLoginVisibility] = useState(false)
  const [alreadySent, setAlreadySent] = useState(!isSet)







  props.storeUser(storedUser)
  const handleToggle = () => {
    setLoginVisibility(!visible)
  }
  const toggleAlreadySet = () => {
    setAlreadySent(!alreadySent)
  }

  const logOut = () => {
    props.saveUser(undefined)
  }

  const logOutOnClick = () => {
    localStorage.setItem("user", "undefined")
    logOut()
    toggleAlreadySet()
  }

  if (visible) {
    if (!alreadySent || storedUser === "undefined") {
      return (
        <div className="loginDiv">
          <div className="loginToggle">
            <button type="button" onClick={handleToggle} className="loginToggle" >Toggle</button>
          </div>
          <LoginInputs saveUser={props.saveUser} valueUser={props.valueUser} setAlreadySet={toggleAlreadySet} />
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
            <button onClick={logOutOnClick}>Logout</button>
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
