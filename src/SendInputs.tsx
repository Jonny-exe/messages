import React, { useState } from 'react'
import { postRequest } from './requests'

export const SendInput = (props: any) =>  {

  const [inputValue, setInputValue] = useState("")

  const handleInput = (event: any) => {
    setInputValue(event.target.value)
  }

  const postValue = () => {
    console.log(inputValue)
    postRequest("this is from ui", inputValue)
  }

  return (
    <div>
		  <button type="button" onClick={postValue}>Send</button>
      <input type="text" onChange={handleInput}/>
    </div>
  )
}

export default SendInput
