import React, { useState } from 'react'
import Hello from './Hello'
import Tweet from './tweet'
import Message from './message'
import './App.css'
import { useFetch } from './requests'
const App = () => {

  const {data, loading} = useFetch()
  console.log(data, loading)
  return (
    <div className="app">
      <div> {loading ? "loading" : data }</div>
    </div>
  )
}

export default App
