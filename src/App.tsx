import React, { useState } from 'react'
import './App.css'
import { useFetch } from './requests'
import SendInput from './SendInputs'
import MessagesAll from './MessagesAll'
import Login from './Login'
const App = () => {
  const {data, loading} = useFetch()
  // postRequest("this is the test", "this is the new test")
  const parentFunction = () => {

  }
return (
    <div className="app">
      <Login />
      <MessagesAll />
      <SendInput />

    </div>
  )
}

export default App
