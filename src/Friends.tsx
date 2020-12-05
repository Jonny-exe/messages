import React from 'react'
import Friend from './Friend'
import { GetFriends } from './requests.jsx'

const Friends = (props: any) => {
  props.setReceiver(props.valueReceiver)
  var { data } = GetFriends(props.valueUser, props.friendAdded)
  console.log("Friends: ", data)
  // {!data && !data.friends ? "loading" : data.friends.map((name: any) => (<Friend name={name} setReceiver={props.setReceiver} />))}
  return (
    <div>
      <span className="currentUser">{props.valueUser}, {props.valueReceiver}</span>
      <div> {!data ? "Loading" : !data.friends ? "Loading friends" : data.friends.map((name: any) => (<Friend name={name} setReceiver={props.setReceiver} />))} </div>
    </div>
  )
}






export default Friends
