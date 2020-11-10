import React from 'react'
import Message from './Message'
import { useFetch } from './requests'

export const MessagesAll = () =>  {
  const {data} = useFetch("getall")
  return (
    <div>
      {!data ? "loading" : data.map((content: any) => (
        <Message content={content.textContent} key={content._id} />
      ))}
    </div>
  )
}

export default MessagesAll
