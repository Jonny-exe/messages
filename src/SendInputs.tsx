import React, { useState } from 'react'
import { postRequest } from './requests'

const SendInputs = (props: any) =>  {

  const [inputValue, setInputValue] = useState("")

  const handleInput = (event: any) => {
    setInputValue(event.target.value)
  }

  const postValue = () => {
    console.log(inputValue)
    postRequest(props.valueUser, "Someone else", inputValue)
  }

  return (
    <div className="inputs">
      <input type="text" className="sendInput" onChange={handleInput}/>
		  <button type="button" className="sendButton" onClick={postValue}>Send</button>
    </div>
  )
}

export default SendInputs
