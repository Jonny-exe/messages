import React, { useState } from 'react'
import Hello from './Hello'
import Tweet from './tweet'
import './App.css'
import {GetRequest, PostRequest} from './requests'
function App() {

  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(0)

  const [user, setUser] = useState({
    name: 'Ed',
    age: 5
  })

  const request = async () => {
    console.log("Request made")
    var myRequest = new GetRequest()
    var body = await myRequest.makeRequest()
    console.log(body)

    var myPost = new PostRequest("hi", "this is the first real one")
  }
  request()
  const increment = () => {
    setCount(count + 1)
    setRed(true)
  }

  const [users, setUsers] = useState([
    { name: "ED", message: "hello youtube" },
    { name: "El", message: "hrrrrrrrrrrre" }
  ])
  return (

    <div className="app">
      <h1 className={isRed ? 'red' : ""}> Messages world </h1>
      <Hello />
      {users.map(user => (
        <Tweet key={Math.random()}name={user.name} message={user.message} />
      ))}

      <button type="button" onClick={increment}> {count} </button>
    </div>
  )
}

export default App
