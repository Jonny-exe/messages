import React, { useEffect, useState } from 'react'
import Friend from './Friend'
import { GetFriends } from './requests.jsx'

const Friends = (props: any) => {
  props.setReceiver(props.valueReceiver)
  const { data } = GetFriends(props.valueUser)
  console.log(`This is data from friends ${data}`)
  
  //TODO: data is not the friends is the hole object
  return (
    <div>
      <h1>{props.valueUser}, {props.valueReceiver}</h1>
        {!data ? "loading" : data.friends.map((name: any) => (<Friend name={name} setReceiver={props.setReceiver} />))}
    </div>
  )
}






export default Friends
