import React , {useState} from 'react'
import Message from './Message'
import { GetWithFilter } from './requests.jsx'

export const MessagesAll = (props: any) => {
  const { messages } = GetWithFilter(props.sender, props.receiver, props.messagesSentCount)
  console.log("MessagesAll: data: ", messages)
  console.log(messages)
  if (props.receiver === "") {
    return (
      <div className="messagesList" >
        <span className="noMessagesText">To start chatting select a receiver</span>
      </div>
    )
  } else {
    return (
      <div className="messagesList">
        {!messages ? "loading" : messages.map((content: any) => (
          <Message data={content} user={props.valueUser} key={content._id} />
        ))}
      </div>
    )
  }
}

export default MessagesAll
