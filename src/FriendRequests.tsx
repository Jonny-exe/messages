import React from 'react'
import FriendRequest from './FriendRequest'
import { GetFriendRequests } from './requests.jsx'

const FriendRequests = (props: any) => {
  const { requests } = GetFriendRequests(props.valueUser)
  console.log("FriendRequests: data: ", requests, props.valueUser)

  return (
    <div>
      {requests == null ? "Loading" : requests.map((r: any) => (
        <div> <FriendRequest valueUser={props.valueUser}name={r.name} date={r.date} /> </div>))}
    </div>
  )
}

export default FriendRequests
