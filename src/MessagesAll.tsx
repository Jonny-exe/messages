import React from 'react'
import Message from './Message'
import { GetWithFilter } from './requests'

export const MessagesAll = () =>  {
  const {data} = GetWithFilter("jonny", "hi")
  return (
    <div className="messages">
      {!data ? "loading" : data.map((content: any) => (
        <Message content={content.textContent} key={content._id} />
      ))}
    </div>
  )
}

export default MessagesAll
