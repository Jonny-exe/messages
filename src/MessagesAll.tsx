import React from 'react'
import Message from './Message'
import { GetWithFilter, GetFriends } from './requests.jsx'

export const MessagesAll = (props: any) => {
  const { data } = GetWithFilter(props.sender, props.receiver)
  console.log("MessagesAll: data: ", data)
  if (props.receiver == "") {
    return (
      <div className="messages" >
        <h2>To start chatting select a receiver</h2>
      </div>
    )
  } else {
    return (
      <div className="messages">
        {!data ? "loading" : data.map((content: any) => (
          <Message data={content} user={props.valueUser} key={content._id} />
        ))}
      </div>
    )
  }
}

export default MessagesAll
