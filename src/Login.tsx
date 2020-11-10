import React, { useEffect, useState } from 'react'


export const Login = (props: any) => {
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

  return (
    <label>
      <button type="button" onClick={handleToggle} className="logins loginToggle" >Toggle</button>
      <label style={{ visibility: visible ? "visible" : "hidden" }}>
        <button type="button" onClick={props.setUser(storeUser)} className="logins">Send</button>
        <input type="text" onChange={handleInput} className="logins" placeholder="Username"></input>
      </label>
    </label>
  )
}

export default Login
