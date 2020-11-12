import React, { useEffect, useState } from 'react'
import FriendAdd from './FriendAdd'
import LoginInputs from './LoginInputs'


export const Login = (props: any) => {

  const isSet = localStorage.getItem("user") === "undefined"
  const storedUser = localStorage.getItem("user")
  const [visible, setLoginVisibility] = useState(false)
  const [alreadySent, setAlreadySent] = useState(!isSet)

  props.setUser(storedUser)
  const handleToggle = () => {
    setLoginVisibility(!visible)
  }

  const sendOnClick = () => {
    toggleAlreadySet()
  }

  const toggleAlreadySet = () => {
    setAlreadySent(!alreadySent)
    console.log("this is already sent " + alreadySent)
  }

  const logOut = () => {
    props.setUser(undefined)
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
          <LoginInputs setUser={props.setUser} setAlreadySet={toggleAlreadySet}/>
          <FriendAdd setUser={props.setUser}/>
        </div>
      )
    } else {
      return (
        <div className="loginDiv">
          <div className="loginToggle">
            <button type="button" onClick={handleToggle} className="loginToggle" >Toggle</button>
          </div>
          <div className="logins">
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
