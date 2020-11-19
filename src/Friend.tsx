import React from 'react'

function Friend(props: any) {
  const setReceiver = () => {
    props.setReceiver(props.name)
  }
  return (
    <div className="friend" onClick={setReceiver}>
      <h3> {props.name} </h3>
    </div>
  )
}

export default Friend
