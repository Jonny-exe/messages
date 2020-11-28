import {useEffect, useState} from "react";

const url = 'http://192.168.0.16:5000/';
const headersContent = {
  // "Access-Control-Allow-Credentials": "true",
  // "Access-Control-Allow-Origin": "http://localhost:3000",
  // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
  // "Access-Control-Max-Age": "1000",
  // "Access-Control-Allow-Headers": "x-requested-with, Content-Type, origin, authorization, accept, client-security-token",
  // "Content-Type": "application/json"
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
  console.log("This is the texxt content: " + textContent)
  var bodyContent = {
    sender: userContent,
    receiver: reciverContent,
    content: textContent
  }
  fetch(url + "addmessage", {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(res => res.json()).then(resJson => {
    console.log("PostRequest: ", resJson)
    return resJson
  })
}

export const DoesUserExist = (newUser) => {
  const url = 'http://192.168.0.16:5000/doesuserexist';
  const [state, setState] = useState({DoesExist: null, loading: true})
  useEffect(() => {
    var bodyContent = {
      name: newUser
    }
    console.log("DoesUserExist: bodyContent: ", bodyContent, newUser)
    setState(state => ({data: state.data, loading: true}))
    fetch(url, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("DoesUserExist: json data", json, newUser)
      setState({DoesExist: json, loading: false})
    })
  }, [newUser])
  return state
}

export const GetWithFilter = (filterSender, filterReceiver) => {
  const url = 'http://localhost:5000/getwithfilter';
  const [state, setState] = useState({data: null, loading: true})
  useEffect(() => {
    var bodyContent = {
      sender: filterSender,
      receiver: filterReceiver
    }
    setState(state => ({data: state.data, loading: true}))
    fetch(url, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("GetWithFilter: json data: ", json)
      setState({data: json, loading: false})
    })
  }, [filterReceiver, filterSender])
  return state
}

export const AddFriend = (userContent, newFriendContent) => {
  const url = 'http://192.168.0.16:5000/addfriend';
  // var jsonData
  var bodyContent = {
    user: userContent,
    newFriend: newFriendContent
  }

  console.log("AddFriend: ", bodyContent)
  fetch(url, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(json => {
    console.log("AddFriend: ", json)
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
    console.log("AddUser: ", json)
    return json
  })
}

export const GetFriends = (user, friendAdded) => {
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
      console.log("GetFriends: ", json)
      setState({data: json, loading: false})
    })
  }, [user, friendAdded])

  return state
}
