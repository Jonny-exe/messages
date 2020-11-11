import React ,{ useState } from 'react'

function Message(props: any) {
  const sender = props.data.sender
  const text = props.data.textContent
  const user = props.user

  return (
    <div className={`message ${user === sender ? "messageRigth" : "messageLeft"}`}>
      {props.data.textContent}
    </div>
  )
}

export default Message
