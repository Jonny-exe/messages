import { allowedNodeEnvironmentFlags } from 'process'
import React, { useState } from 'react'
import { SendMessage } from './requests.jsx'

const SendInputs = (props: any) => {
  const [inputValue, setInputValue] = useState("")

  const handleInput = (event: any) => {
    setInputValue(event.target.value)
  }


  const sendInput = (event: any) => {
    SendMessage(props.valueUser, props.receiver, inputValue)
    setInputValue("")
    props.increaseMessagesSentCount()
  }

  return (
    <div className="inputs">
      <input type="text" className="sendInput textInput" onChange={handleInput} value={inputValue} />
      <button type="button" className="sendButton button" onClick={sendInput}> Send </button>
    </div>
  )
}

export default SendInputs
