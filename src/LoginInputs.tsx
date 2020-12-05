import React, { useState, useEffect } from 'react'
import { UserLogin, DoesUserExist } from './requests.jsx'

const LoginInputs = (props: any) => {
  const [storeUser, setStoreUser] = useState(localStorage.getItem("user"))
  const [userWarning, setUserWarning] = useState(undefined)
  const [storePassword, setStorePassword] = useState("")
  const [finalLoginPassword, setFinalLoginPassword] = useState("")
  const [finalRegisterUser, setFinalRegisterUser] = useState("")
  const [passwordWarning, setPasswordWarning] = useState(undefined)
  const handleRegister = (event: any) => {
    setStorePassword(event.target.value)
  }

  const handleLogin = (event: any) => {
    setStoreUser(event.target.value)
  }

  var { loading, successfulLogin } = UserLogin(storeUser, finalLoginPassword)
  var { doesUserExist } = DoesUserExist(finalRegisterUser)

  useEffect(() => {
    console.log("LoginInputs: sendLogin: loading, successfulLogin", loading, successfulLogin)
    // Ask if the data has been loaded, this cant be done with successfulLogin because it may be still the old value
    if (!loading) {
      // Never null
      if (successfulLogin) {
        console.log("LoginInputs: sendLogin: successfully", successfulLogin)
        props.login(storeUser)
        props.toggleAlreadySet()
        doesUserExist = false
      } else {
        setPasswordWarning(true)
        setUserWarning(false)
      }
      successfulLogin = null
    }
  }, [successfulLogin])


  useEffect(() => {
    console.log("LoginInputs: sendRegister: loading, successfulLogin", loading, successfulLogin)
    // Ask if the data has been loaded
    if (!loading && !doesUserExist) {
      if (storeUser != "" && storeUser != "null") {
        setUserWarning(false)
        console.log("LoginInputs: SendInput: doesUserExist ", doesUserExist)
        props.saveUser(storeUser, storePassword)
        props.toggleAlreadySet()
        doesUserExist = false
      }
    } else {
      setUserWarning(true)
      setPasswordWarning(false)
    }
  }, [doesUserExist])

  console.log(doesUserExist)
  return (
    <div className="logins">
      <input type="text" onChange={handleLogin} className="loginTextInput textInput" placeholder="Username"></input>
      <input type="text" onChange={handleRegister} className="loginTextInput textInput" placeholder="Password"></input>
      <button type="button" onClick={() => {
        setFinalLoginPassword(storePassword)
      }} className="loginButtons button">Login</button>
      <button type="button" onClick={() => {
        setFinalRegisterUser(storeUser)
      }} className="loginButtons button">Register</button>
      <span className="userExistsWarning"> {userWarning != undefined ? userWarning ? "User already exists ❌" : "" : ""} </span>
      <span className="userExistsWarning"> {passwordWarning != undefined ? passwordWarning ? "Wrong Password or username ❌" : "" : ""} </span>
    </div>
  )
}

export default LoginInputs
