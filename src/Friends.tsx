import React from 'react'
import Friend from './Friend'
import { GetFriends } from './requests.jsx'

const Friends = (props: any) => {
  // props.setReceiver(props.valueReceiver)
  var { friends } = GetFriends(props.valueUser, props.friendAdded, props.friendsAcceptedCount)
  console.log("Friends: ", friends)
  return (
    <div className="friendsList">
      {!friends ? "Loading friends" : friends.map((name: any) => (<Friend name={name} setReceiver={props.setReceiver} />))}
    </div>
  )
}

export default Friends
