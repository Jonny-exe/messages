import React from 'react'
import Message from './Message'
import { GetWithFilter } from './requests'

export const MessagesAll = (props: any) =>  {
  const {data} = GetWithFilter("jonny", "hi")
  return (
    <div className="messages">
      {!data ? "loading" : data.map((content: any) => (
        <Message data={content} user={props.valueUser} key={content._id} />
      ))}
    </div>
  )
}

export default MessagesAll
