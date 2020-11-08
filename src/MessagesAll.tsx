import React from 'react'
import Message from './message'
import { useFetch } from './requests'

export const MessagesAll = (props: any) =>  {
  const {data, loading} = useFetch("getall")
  return (
    <div>
      {!data ? "loading" : data.forEach((x: any)  => {
        <Message content={x.title} />
        console.log(x.title)
      })}
    </div>
  )
}

export default MessagesAll

