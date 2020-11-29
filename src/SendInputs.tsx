import React, { useState } from 'react'
import { PostRequest } from './requests.jsx'

const SendInputs = (props: any) => {

  const [inputValue, setInputValue] = useState("")

  const handleInput = (event: any) => {
    setInputValue(event.target.value)
  }


  const postValue = () => {

    PostRequest(props.valueUser, props.receiver, inputValue)
  }

  return (
    <div className="inputs">
      <form>
        <input type="text" className="sendInput" onChange={handleInput} />
        <button type="button" className="sendButton" onClick={postValue}>Send</button>
      </form>
    </div>
  )
}

export default SendInputs
