import React, { useState } from 'react'
import { GetFriends, GetWithFilter, PostRequest } from './requests.jsx'

const SendInputs = (props: any) =>  {

  const [inputValue, setInputValue] = useState("")

  const handleInput = (event: any) => {
    setInputValue(event.target.value)
  }


  const postValue = () => {
    // GetFriends(props.valueUser)
    // GetWithFilter("", "")

    PostRequest(props.valueUser, props.receiver, inputValue)
  }

  return (
    <div className="inputs">
      <input type="text" className="sendInput" onChange={handleInput}/>
		  <button type="button" className="sendButton" onClick={postValue}>Send</button>
    </div>
  )
}

export default SendInputs
