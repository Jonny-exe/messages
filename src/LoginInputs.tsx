import React, { useState, useEffect } from 'react'
import { DoesUserExist, UserLogin } from './requests.jsx'

const LoginInputs = (props: any) => {
  const [storeUser, setStoreUser] = useState(localStorage.getItem("user"))
  const [userWarning, setUserWarning] = useState("loginTextInput")
  const [passWarning, setPassWarning] = useState("loginTextInput")
  const [storePassword, setStorePassword] = useState(localStorage.getItem("user"))
  const [checkUser, setCheckUser] = useState({ user: "", pass: "" })
  const handleRegister = (event: any) => {
    setStorePassword(event.target.value)
  }

  const handleLogin = (event: any) => {
    setStoreUser(event.target.value)
  }

  var { DoesExist } = DoesUserExist(storeUser)
  var { succesfullLogin } = UserLogin(storeUser, storePassword, checkUser)
  const sendLogin = () => {
    if (succesfullLogin) {
      console.log("LoginInputs: SendInput: DoesExist ", DoesExist)
      props.login(storeUser)
      props.setAlreadySet()
      DoesExist = false
    }
  }

  const sendRegister = () => {
    if (!DoesExist) {
      console.log("LoginInputs: SendInput: DoesExist ", DoesExist)
      setCheckUser({ user: storeUser, pass: storePassword })
      DoesExist = false
    }
  }

  return (
    <div className="logins">
      <input type="text" onChange={handleLogin} className="loginTextInput" placeholder="Username"></input>
      <input type="text" onChange={handleRegister} className="loginTextInput" placeholder="Password"></input>
      <button type="button" onClick={sendLogin} className="loginButtons">Login</button>
      <button type="button" onClick={sendRegister} className="loginButtons">Register</button>
      {/* TODO: make this just change a color */}
      <span className="userExistsWarning"> {DoesExist != null ? DoesExist ? "User already exists ❌" : "User is valid ✅" : "Loading"} </span>
    </div>
  )
}

export default LoginInputs
