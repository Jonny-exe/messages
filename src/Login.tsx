import React, { useEffect, useState } from 'react'


export const Login = (props: any) => {
  const [visible, setLoginVisibility] = useState(false)
  const [storeUser, setStoreUser] = useState(localStorage.getItem("user"))

  props.setUser(localStorage.getItem("user"))
  const handleToggle = () => {
    setLoginVisibility(!visible)
    console.log(visible)
  }

  const handleInput = (event: any) => {
    setStoreUser(event.target.value)
  }

  const sendInput = () => {
    props.setUser(storeUser)
  }

  if (visible) {
    return (
      <div className="loginDiv">
        <div className="loginToggle">
          <button type="button" onClick={handleToggle} className="loginToggle" >Toggle</button>
        </div>
        <div className="logins">
          <input type="text" onChange={handleInput} className="loginInputs" placeholder="Username"></input>
          <button type="button" onClick={sendInput} className="loginInputs">Send</button>
        </div>
      </div>
    )
  }
  return (
    <div className="loginToggle">
      <button type="button" onClick={handleToggle} className="loginToggle" >Toggle</button>
    </div>
  )
}

export default Login
