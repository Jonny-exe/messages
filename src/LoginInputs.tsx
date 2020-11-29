import React, { useState, useEffect } from 'react'
import { DoesUserExist, UserLogin } from './requests.jsx'

const LoginInputs = (props: any) => {
  const [storeUser, setStoreUser] = useState(localStorage.getItem("user"))
  const [userWarning, setUserWarning] = useState(false)
  const [passwordWarning, setPasswordWarning] = useState(false)
  const [storePassword, setStorePassword] = useState(localStorage.getItem("user"))
  const [checkUser, setCheckUser] = useState({ user: "", pass: "" })
  const handleRegister = (event: any) => {
    setStorePassword(event.target.value)
  }

  const handleLogin = (event: any) => {
    setStoreUser(event.target.value)
  }

  var { DoesExist } = DoesUserExist(storeUser)
  var { succesfullLogin } = UserLogin(storeUser, storePassword)
  const sendLogin = () => {
    if (succesfullLogin) {
      console.log("LoginInputs: SendInput: DoesExist ", DoesExist)
      props.login(storeUser)
      props.setAlreadySet()
      DoesExist = false
    } else {
      setPasswordWarning(true)
      setUserWarning(false)
    }
  }
  console.log(succesfullLogin)
  const sendRegister = () => {
    if (!DoesExist) {
      setUserWarning(false)
      console.log("LoginInputs: SendInput: DoesExist ", DoesExist)
      props.saveUser(storeUser, storePassword)
      props.setAlreadySet()
      DoesExist = false
    } else {
      setUserWarning(true)
      setPasswordWarning(false)
    }
  }

  return (
    <div className="logins">
      <input type="text" onChange={handleLogin} className="loginTextInput" placeholder="Username"></input>
      <input type="text" onChange={handleRegister} className="loginTextInput" placeholder="Password"></input>
      <button type="button" onClick={sendLogin} className="loginButtons">Login</button>
      <button type="button" onClick={sendRegister} className="loginButtons">Register</button>
      {/* TODO: make this just change a color */}
      <span className="userExistsWarning"> {userWarning ? "User already exists ❌": ""} </span>
      <span className="userExistsWarning"> {passwordWarning ? "Wrong Password or username ❌": ""} </span>
    </div>
  )
}

export default LoginInputs
