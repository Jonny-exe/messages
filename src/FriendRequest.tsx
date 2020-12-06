import React from 'react'
import { AddFriend, RemoveFriendRequest } from './requests'

const FriendRequest = (props: any) => {
  const acceptFriend = (newFriend: string) => {
    AddFriend(props.valueUser, newFriend)
  }

  const declineFriend = (friendToRemove: string) => {
    RemoveFriendRequest(props.valueUser, friendToRemove)
  }

  return (
    <div className="friendRequests">
      <h1> Request </h1>
      <span> <b> Request </b>: {props.name} <b> Date </b> : {props.date}  </span>
      <button type="button" onClick={() => {
        declineFriend(props.name)
      }} className="friendRequestAccept button"> D </button>
      <button type="button" onClick={() => {
        acceptFriend(props.name)
      }} className="friendRequestAccept button"> A </button>
    </div>
  )
}

export default FriendRequest
