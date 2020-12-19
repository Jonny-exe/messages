import React, { useState } from 'react'
import './App.css'
import SendInput from './SendInputs'
import MessagesAll from './MessagesAll'
import Login from './Login'
import Friends from './Friends'
import Receiver from './Receiver'
import Logo from './Logo'
import { AddUser } from './requests.jsx'

const App = () => {
  const [user, setUser] = useState("")
  const [receiver, setReceiver] = useState("")
  const [friendAdded, setFriendAdded] = useState(false) //This is just a value to toggle when a friend gets added so the apt gets fetched

  // This is to update your messages or friends when you send a message or accept a friend
  const [messagesSentCount, setMessagesSentCount] = useState(0)
  const [friendsAcceptedCount, setFriendsAcceptedCount] = useState(0)

  const toggleFriendAdded = () => {
    setFriendAdded(!friendAdded)
  }

  const increaseFriendsAcceptedCount = () => {
    setFriendsAcceptedCount(friendsAcceptedCount + 1)
  }

  const increaseMessagesSentCount = () => {
    setMessagesSentCount(messagesSentCount + 1)
  }

  const saveUser = (username: string, password: string) => {
    login(username)
    AddUser(username, password)
  }


  const login = (username: string) => {
    setUser(username)
    localStorage.setItem("user", username)
  }

  const logOut = () => {
    console.log("App: logOut")
    setUser(undefined)
    localStorage.removeItem("user")
  }

  const setReceiverFunc = (name: string) => {
    setReceiver(name)
  }

  return (
    <div>
      <div className="app">
        <div className="friends">
          <Logo valueUser={user} valueReciever={receiver} />
          <Friends friendsAcceptedCount={friendsAcceptedCount} friendAdded={friendAdded} valueUser={user} setReceiver={setReceiverFunc} valueReceiver={receiver} />
        </div>
        <div className="messages">
          <Receiver receiver={receiver} />
          <MessagesAll messagesSentCount={messagesSentCount} valueUser={user} sender={user} receiver={receiver} />
          <SendInput increaseMessagesSentCount={increaseMessagesSentCount} valueUser={user} receiver={receiver} />
        </div>
        <div className="float">
          <Login login={login} logOut={logOut} increaseFriendsAcceptedCount={increaseFriendsAcceptedCount} toggleFriendAdded={toggleFriendAdded} saveUser={saveUser} valueUser={user} /> 
        </div>
      </div>
    </div>
  )
}

export default App
