import React, { useState } from 'react'
import Friend from './Friend'

const Friends = (props: any) =>  {
  const friends = [
    "Gon",
    "gango",
    "ainge",
    "orte",
    "koldo",
    "otxan",
    "asuah",
    "yo"
  ]
  return (
    <div>
      <h1>{props.valueUser}</h1>
      {friends.map(name => (<Friend name={name} />))}
    </div>
  )
}

export default Friends
