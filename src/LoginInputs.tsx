import React, { useState } from 'react'
const LoginInputs = (props: any) => {
  const [storeUser, setStoreUser] = useState(localStorage.getItem("user"))
  const handleInput = (event: any) => {
    setStoreUser(event.target.value)
  }

  const sendInput = () => {
    props.setUser(storeUser)
    props.setAlreadySet()
  }

  return (
    <div className="logins">
      <input type="text" onChange={handleInput} className="loginInputs" placeholder="Username"></input>
      <button type="button" onClick={sendInput} className="loginInputs">Send</button>
    </div>
  )
}

export default LoginInputs
