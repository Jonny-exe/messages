import React, { useState } from 'react'
import './App.css'
import SendInput from './SendInputs'
import MessagesAll from './MessagesAll'
import Login from './Login'
import Friends from './Friends'
const App = () => {
  // const { data, loading } = useFetch()
  // postRequest("this is the test", "this is the new test")
  const [user, setUser] = useState("")
  const setInput = (storeUser: string) => {
    localStorage.setItem("user", storeUser)
    setUser(storeUser)
  }

  return (
    <div>
      <div className="app">
        <div className="friends">
          <Friends valueUser={user}/>
        </div>
        <div className="messages">
          <MessagesAll valueUser={user}/>
          <SendInput valueUser={user} />
        </div>
        <div className="float">
          <Login setUser={setInput} />  {/* This makes it possible to speak from child to child. Pases data: user from login to sendInput*/}
        </div>
      </div>
    </div>
  )
}

export default App
