import React, { useEffect, useState } from 'react'
import { AddFriend, GetFriends, PostRequest, AddUser } from './requests'

export const FriendAdd = (props: any) => {

  const [friend, setFriend] = useState("")
  const sendFriend = () => {
    AddFriend(props.user, friend)
    console.log("Added a new friend")
  }

  const changeFriend = (event: any) => {
    setFriend(event.target.value)
  }
  return (
    <div>
      <input type="text" onChange={changeFriend} placeholder="Friend Name"></input>
      <button type="button" onClick={sendFriend}>Add friend</button>
    </div>
  )
}




export default FriendAdd
