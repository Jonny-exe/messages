import React, { useEffect, useState } from 'react'
import Friend from './Friend'
import { GetFriends } from './requests.jsx'

const Friends = (props: any) => {
  props.setReceiver(props.valueReceiver)
  const { data } = GetFriends(props.valueUser, props.friendAdded)
  console.log("Friends: ", data)
  // {!data && !data.friends ? "loading" : data.friends.map((name: any) => (<Friend name={name} setReceiver={props.setReceiver} />))}
  return (
    <div>
      <h1>{props.valueUser}, {props.valueReceiver}</h1>
      <div> {!data ? "Loading" : !data.friends ? "Loading friends" : data.friends.map((name: any) => (<Friend name={name} setReceiver={props.setReceiver} />))} </div>
    </div>
  )
}






export default Friends
