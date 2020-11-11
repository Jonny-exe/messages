import React, { useState } from 'react'
import Friend from './Friend'

const Friends = () =>  {
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
      {friends.map(name => (<Friend name={name} />))}
    </div>
  )
}

export default Friends
