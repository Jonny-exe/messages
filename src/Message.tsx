import React from 'react'

function Message(props: any) {
  return (
    <div className="message">
       {props.content}
    </div>
  )
}

export default Message
