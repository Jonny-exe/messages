import React, { useEffect, useState } from 'react'


export const Login = (props: any) => {
  console.log(typeof props)
  const [visible, setLoginVisibility] = useState(false)

  const handleToggle = () => {
    setLoginVisibility(!visible)
    console.log(visible)
  }
  const [user, setUser] = useState("")

  const [storeUser, setStoreUser] = useState("")

  const handleInput = (event: any) => {
    setStoreUser(event.target.value)
  }


  if (visible) {
    return (
      <div className="loginDiv">
        <div className="loginToggle">
          <button type="button" onClick={handleToggle} className="loginToggle" >Toggle</button>
        </div>
        <div className="logins">
          <input type="text" onChange={handleInput} className="loginInputs" placeholder="Username"></input>
          <button type="button" onClick={props.setUser(storeUser)} className="loginInputs">Send</button>
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
