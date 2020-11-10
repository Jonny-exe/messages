import React, { useState } from 'react'
import './App.css'
import { useFetch } from './requests'
import SendInput from './SendInputs'
import MessagesAll from './MessagesAll'
import Login from './Login'
const App = () => {
  const {data, loading} = useFetch()
  // postRequest("this is the test", "this is the new test")
  const [user, setUser] = useState("")
  const setInput = (storeUser: string) => {
    setUser(storeUser)
  }

return (
    <div className="app">
      <Login setUser={setInput}/>  {/* This makes it possible to speak from child to child. Pases data: user from login to sendInput*/}
      <MessagesAll />
      <SendInput valueUser={user}/>

    </div>
  )
}

export default App
