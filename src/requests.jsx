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

export const UploadProfileImage = (user, image, areaToCrop) => {
  const bodyContent = {
    name: user,
    image: image,
      areatocrop : areaToCrop
  }
  console.log("UploadProfileImage", bodyContent)
  fetch(url + "uploadprofileimage", {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(res => res.json()).then(resJson => {
    console.log("PostRequest: ", resJson)
    return resJson
  })
}

export const GetProfileImage = (user) => {
  const [state, setState] = useState({picture: null, loading: true})
  useEffect(() => {
    var bodyContent = {
      name: user
    }
    console.log("GetProfileImage: bodyContent: ", bodyContent)
    setState(state => ({picture: state.picture, loading: true}))
    fetch(url + "getprofileimage", {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("GetProfileImage: json data: ", json)
      setState({picture: json, loading: false})
    })
  }, [user])
  return state
}

export const UserLogin = (finalUser, finalPassword) => {
  const [state, setState] = useState({successfulLogin: null, loginLoading: true})
  const url = 'http://192.168.0.16:5000/login';
  useEffect(() => {
    var bodyContent = {
      name: finalUser,
      pass: finalPassword
    }
    console.log("Login: bodyContent: ", bodyContent)
    setState(state => ({successfulLogin: null, loginLoading: true}))
    fetch(url, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("UserLogin: json data", json)
      if (json != null) {
        console.log("UserLogin: json set")
        setState({successfulLogin: json, loginLoading: false})
      }
    })
  }, [finalPassword])
  return state
}

export const DoesUserExist = (newUser) => {
  const url = 'http://192.168.0.16:5000/doesuserexist';
  const [state, setState] = useState({doesUserExist: null, registerLoading: true})
  useEffect(() => {
    var bodyContent = {
      name: newUser
    }
    console.log("DoesUserExist: bodyContent: ", bodyContent, newUser)
    setState({doesUserExist: null, registerLoading: true})
    fetch(url, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("DoesUserExist: json data", json, newUser)
      setState({doesUserExist: json, registerLoading: false})
    })
  }, [newUser])
  return state
}

export const GetFriendRequests = (user) => {
  const url = 'http://localhost:5000/getfriendrequests';
  const [state, setState] = useState({requests: null, loading: true})
  useEffect(() => {
    var bodyContent = {
      name: user
    }
    console.log("GetFriendRequests: bodyContent: ", bodyContent)
    setState(state => ({requests: state.requests, loading: true}))
    fetch(url, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("GetFriendRequests: json data: ", json)
      setState({requests: json, loading: false})
    })
  }, [])
  return state
}

export const GetWithFilter = (filterSender, filterReceiver) => {
  const url = 'http://localhost:5000/getwithfilter';
  const [state, setState] = useState({messages: null, loading: true})
  useEffect(() => {
    var bodyContent = {
      sender: filterSender,
      receiver: filterReceiver
    }
    setState(state => ({messages: state.messages, loading: true}))
    fetch(url, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("GetWithFilter: json data: ", json)
      setState({messages: json, loading: false})
    })
  }, [filterReceiver, filterSender])
  return state
}


export const AddFriend = (userContent, newFriendContent) => {
  const url = 'http://192.168.0.16:5000/addfriend';
  // var jsonData
  var bodyContent = {
    name: userContent,
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

export const AddFriendRequest = (userContent, newFriendContent) => {
  const url = 'http://192.168.0.16:5000/addfriendrequest';
  // var jsonData
  var bodyContent = {
    name: userContent,
    newFriend: newFriendContent
  }

  console.log("AddFriendRequest: ", bodyContent)
  fetch(url, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(json => {
    console.log("AddFriendRequest: ", json)
    return json
  })
}

export const RemoveFriendRequest = (user, friendToRemove) => {
  const url = 'http://192.168.0.16:5000/removefriendrequest';
  // var jsonData
  var bodyContent = {
    name: user,
    FriendToRemove: friendToRemove
  }

  console.log("RemoveFriendRequest: ", bodyContent)
  fetch(url, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(json => {
    console.log("RemoveFriendRequest: ", json)
    return json
  })
}

export const AddUser = (username, password) => {
  // TODO: Maybe this doesnt work without capital letters. Test it
  const url = 'http://192.168.0.16:5000/adduser';
  var bodyContent = {
    name: username,
    pass: password,
    friends: [],
    friendRequests: [],
    profileImage: ""
  }
  console.log("AddUser: bodyContent: ", bodyContent)
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
  const [state, setState] = useState({friends: null})

  useEffect(() => {
    var bodyContent = {
      name: user
    }
    setState(state => ({data: state.data}))
    fetch(url, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("GetFriends: ", json)
      setState({friends: json})
    })
  }, [user, friendAdded])

  return state
}
