import React from 'react'
import FriendRequest from './FriendRequest'
import { GetFriendRequests } from './requests.jsx'

const FriendRequests = (props: any) => {
  const { data } = GetFriendRequests(props.valueUser)
  // const [fRequests, setfRequest] = useState(data)
  console.log("FriendRequests: data: ", data, props.valueUser)
  return (
    <div>
      {data == null ? "Loading" : data.map((r: any) => (
        <div> <FriendRequest valueUser={props.valueUser}name={r.name} date={r.date} /> </div>))}
    </div>
  )
}

export default FriendRequests
