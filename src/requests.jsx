import {useEffect, useState} from "react";

const url = 'http://192.168.0.16:5000/';
const headersContent = {
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
  "Access-Control-Max-Age": "1000",
  "Access-Control-Allow-Headers": "x-requested-with, Content-Type, origin, authorization, accept, client-security-token",
  "Content-Type": "application/json"
}

export const useFetch = () => {
  const [state, setState] = useState({data: null, loading: true})

  useEffect(() => {
    setState(state => ({data: state.data, loading: true}))
    fetch(url).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log(json)
      setState({data: json, loading: false})
    })
  }, [])
  return state
}

export const PostRequest = (userContent, reciverContent, textContent) => {
  var bodyContent = {
    sender: userContent,
    receiver: reciverContent,
    textContent: textContent
  }
  fetch(url, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(res => res.json()).then(resJson => {
    console.log(resJson)
    return resJson
  })
}

export const GetWithFilter = (filterSender, filterReceiver) => {
  const url = 'http://192.168.0.16:5000/getwithfilter';
  const [state, setState] = useState({data: null, loading: true})
  useEffect(() => {
    var bodyContent = {
      filter: {
        sender: filterSender,
        receiver: filterReceiver
      }
    }
    setState(state => ({data: state.data, loading: true}))
    fetch(url, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log(json)
      setState({data: json, loading: false})
    })
  }, [filterReceiver, filterSender])
  return state
}

export const AddFriend = (userContent, newFriendContent) => {
  const url = 'http://192.168.0.16:5000/addfriend';
  var jsonData
  var bodyContent = {
    user: userContent,
    newFriend: newFriendContent
  }
  fetch(url, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(json => {
    console.log(json)
    return json
  })
}

export const AddUser = (user) => {
  const url = 'http://192.168.0.16:5000/adduser';
  var bodyContent = {
    name: user
  }
  fetch(url, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
    console.log(json)
    return json
  })
}

export const GetFriends = (user) => {
  const url = 'http://192.168.0.16:5000/getfriends';
  const [state, setState] = useState({data: null, loading: true})

  useEffect(() => {
    var bodyContent = {
      name: user
    }
    setState(state => ({data: state.data, loading: true}))
    fetch(url, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log(json)
      setState({data: json, loading: false})
    })
  }, [user])

  return state
}
