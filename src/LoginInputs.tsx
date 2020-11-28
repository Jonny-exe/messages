import React, { useState, useEffect } from 'react'
import { DoesUserExist } from './requests.jsx'

const LoginInputs = (props: any) => {
  const [storeUser, setStoreUser] = useState(localStorage.getItem("user"))
  const [finalUser, setFinalUser] = useState("")
const handleInput = (event: any) => {
  setStoreUser(event.target.value)
  }
  var { DoesExist } = DoesUserExist(storeUser)
  // TODO: this doesnt work
  const sendInput = () => {
    if (!DoesExist) {
      console.log("LoginInputs: SendInput: data ", DoesExist)
      props.saveUser(storeUser)
      props.setAlreadySet()
      DoesExist = false
    }
  }
  useEffect(() => {
    console.log("Effetc")
  }, [finalUser])

  return (
    <div className="logins">
      <input type="text" onChange={handleInput} className="loginInputs" placeholder="Username"></input>
      <button type="button" onClick={sendInput} className="loginInputs">Send</button>
      <span className="userExistsWarning"> {DoesExist != null ? DoesExist ? "User already exists ❌" : "User is valid ✅" : "Loading"} </span>
    </div>
  )
}

export default LoginInputs
