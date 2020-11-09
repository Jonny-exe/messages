import React, { useState } from 'react'
import Hello from './Hello'
import Tweet from './tweet'
import Message from './message'
import './App.css'
import { useFetch } from './requests'
import SendInput from './SendInput'
import MessagesAll from './MessagesAll'
const App = () => {
  const {data, loading} = useFetch()
  // postRequest("this is the test", "this is the new test")
  return (
    <div className="app">
      <div> {!data ? "loading" : data.title }</div>
      <SendInput />
      <MessagesAll />
    </div>
  )
}

export default App
