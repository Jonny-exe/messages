import React, { useState } from 'react'
import { postRequest } from './requests'

const SendInputs = () =>  {

  const [inputValue, setInputValue] = useState("")
  const [user, setUser] = useState("")

  const handleInput = (event: any) => {
    setInputValue(event.target.value)
  }

  const postValue = () => {
    console.log(inputValue)
    postRequest("jonny", "Someone else", inputValue)
  }

  const setInput = (storeUser: string) => {
    setUser(storeUser)
  }

  return (
    <div>
      <input type="text" className={"sendInput inputs"} onChange={handleInput}/>
		  <button type="button" className={"sendButton inputs"} onClick={postValue}>Send</button>
    </div>
  )
}

export default SendInputs
