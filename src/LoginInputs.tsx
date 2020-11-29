import React, { useState, useEffect } from 'react'
import { DoesUserExist } from './requests.jsx'

const LoginInputs = (props: any) => {
  const [storeUser, setStoreUser] = useState(localStorage.getItem("user"))
const handleInput = (event: any) => {
  setStoreUser(event.target.value)
  }
  var { DoesExist } = DoesUserExist(storeUser)
  // TODO: this doesnt work
  const sendInput = () => {
    if (!DoesExist) {
      console.log("LoginInputs: SendInput: DoesExist ", DoesExist)
      props.saveUser(storeUser)
      props.setAlreadySet()
      DoesExist = false
    }
  }

  return (
    <div className="logins">
      <input type="text" onChange={handleInput} className="loginTextInput" placeholder="Username"></input>
      <input type="text" onChange={handleInput} className="loginTextInput" placeholder="Password"></input>
      <button type="button" onClick={sendInput} className="loginButtons">Login</button>
      <button type="button" onClick={sendInput} className="loginButtons">Register</button>
      <span className="userExistsWarning"> {DoesExist != null ? DoesExist ? "User already exists ❌" : "User is valid ✅" : "Loading"} </span>
    </div>
  )
}

export default LoginInputs
