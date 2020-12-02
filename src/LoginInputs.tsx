import React, { useState, useEffect } from 'react'
import {  Test } from './requests.jsx'

const LoginInputs = (props: any) => {
  const [storeUser, setStoreUser] = useState(localStorage.getItem("user"))
  const [userWarning, setUserWarning] = useState(false)
  const [storePassword, setStorePassword] = useState("")
  const [finalPassword, setFinalPassword] = useState("")
  const [passwordWarning, setPasswordWarning] = useState(false)
  const handleRegister = (event: any) => {
    setStorePassword(event.target.value)
  }

  const handleLogin = (event: any) => {
    setStoreUser(event.target.value)
  }

  var DoesExist: boolean
  var { loading, succesfullLogin } = Test(storeUser, finalPassword)
  // const sendLogin = (success: boolean) => {
  //   console.log("LoginInputs: sendLogin: successfuly", success)
  //   console.log("LoginInputs: sendLogin: loading", loading)
  //   var hi = succesfullLogin.getState()
  //   console.log("Hi: ", hi)
  //   // Ask if the data has been loaded
  //   if (!loading) {
  //     // Never null
  //     if (succesfullLogin) {
  //       console.log("LoginInputs: sendLogin: successfuly", succesfullLogin)
  //       props.login(storeUser)
  //       props.setAlreadySet()
  //       DoesExist = false
  //     } else {
  //       setPasswordWarning(true)
  //       setUserWarning(false)
  //     }
  //     succesfullLogin = null
  //   } else {
  //     console.log("LoginInputs: sendLogin: successfuly", succesfullLogin)
  //     setTimeout(sendLogin, 1000, succesfullLogin)
  //   }
  // }

  useEffect(() => {
    console.log("LoginInputs: sendLogin: loading, succesfullLogin", loading, succesfullLogin)
    // Ask if the data has been loaded
    if (!loading) {
      // Never null
      if (succesfullLogin) {
        console.log("LoginInputs: sendLogin: successfuly", succesfullLogin)
        props.login(storeUser)
        props.setAlreadySet()
        DoesExist = false
      } else {
        setPasswordWarning(true)
        setUserWarning(false)
      }
      succesfullLogin = null
    }
  }, [succesfullLogin])
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
      <button type="button" onClick={() => {
        setFinalPassword(storePassword)
        {/* sendLogin(succesfullLogin) */}
      }} className="loginButtons">Login</button>
      <button type="button" onClick={sendRegister} className="loginButtons">Register</button>
      <span className="userExistsWarning"> {userWarning ? "User already exists ❌" : ""} </span>
      <span className="userExistsWarning"> {passwordWarning ? "Wrong Password or username ❌" : ""} </span>
    </div>
  )
}

export default LoginInputs
