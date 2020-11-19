import React from 'react'
import Message from './Message'
import { GetWithFilter, GetFriends } from './requests.jsx'

export const MessagesAll = (props: any) => {
  const { data } = GetWithFilter(props.sender, props.receiver)
  console.log("this is data " + data)
  return (
    <div className="messages">
      {!data ? "loading" : data.map((content: any) => (
        <Message data={content} user={props.valueUser} key={content._id} />
      ))}
    </div>
  )
}

export default MessagesAll
