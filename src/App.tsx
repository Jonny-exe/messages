
import React, { useState } from 'react'
import './App.css'
import SendInput from './SendInputs'
import MessagesAll from './MessagesAll'
import Login from './Login'
import Friends from './Friends'
import { AddFriend, GetFriends, GetWithFilter, PostRequest, AddUser } from './requests.jsx'

const App = () => {
  // const { data, loading } = useFetch()
  // postRequest("this is the test", "this is the new test")
  const [user, setUser] = useState("")
  const [receiver, setReceiver] = useState("")
  const [currentFriends, setCurrentFriends] = useState([])

  const storeUser = (userName: string) => {
    localStorage.setItem("user", userName)
    setUser(userName)
  }

  
  const saveUser = (userName: string) => {
    storeUser(userName)
    AddUser(userName)
  }

  const setReceiverFunc = (name: string) => {
    setReceiver(name)
  }

  return (
    <div>
      <div className="app">
        <div className="friends">
          <Friends  valueUser={user} setReceiver={setReceiverFunc} valueReceiver={receiver} />
        </div>
        <div className="messages">
          <MessagesAll valueUser={user} sender={user} receiver={receiver}/>
          <SendInput valueUser={user} receiver={receiver}/>
        </div>
        <div className="float">
          <Login storeUser={storeUser} saveUser={saveUser} friends={currentFriends} valueUser={user}/>  {/* This makes it possible to speak from child to child. Pases data: user from login to sendInput*/}
        </div>
      </div>
    </div>
  )
}

export default App
