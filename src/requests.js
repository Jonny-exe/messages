import {
  useEffect,
  useState
} from "react";

const url = 'http://192.168.0.16:5000/';
// const url = 'http://numbersapi.com/43/trivia';

const parameters = {
  credentials: 'same-origin',
  method: 'GET',
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    "Access-Control-Max-Age": "1000",
    "Access-Control-Allow-Headers": "x-requested-with, Content-Type, origin, authorization, accept, client-security-token",
    "Content-Type": "application/json"
  }
}

export const useFetch = (extra) => {
  if (extra == undefined)
    extra = ""
  const [state, setState] = useState({
    data: null,
    loading: true
  })

  useEffect(() => {
    setState(state => ({
      data: state.data,
      loading: true
    }))
    fetch(url + extra).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log(json)
      setState({
        data: json,
        loading: false
      })
    })
  }, [url])
  return state
}

export const postRequest = (userContent, reciverContent, textContent) => {
  var bodyContent = {
    sender: userContent,
    receiver: reciverContent,
    textContent: textContent
  }
  fetch(url, {
    method: 'POST',
    headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
      "Access-Control-Max-Age": "1000",
      "Access-Control-Allow-Headers": "x-requested-with, Content-Type, origin, authorization, accept, client-security-token",
      "Content-Type": "application/json"
    },
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(res => res.json()).then(resJson => {
    console.log(resJson)
    return resJson
  })
}


export const GetWithFilter = (filterSender, filterReceiver) => {
  const url = 'http://192.168.0.16:5000/getwithfilter';
  const [state, setState] = useState({
    data: null,
    loading: true
  })

  var bodyContent = {
    filter: {
      sender: filterSender,
      receiver: filterReceiver
    }
  }
  useEffect(() => {
    setState(state => ({
      data: state.data,
      loading: true
    }))
    fetch(url, {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
        "Access-Control-Max-Age": "1000",
        "Access-Control-Allow-Headers": "x-requested-with, Content-Type, origin, authorization, accept, client-security-token",
        "Content-Type": "application/json"
      },
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data =>
      data.text()
    ).then(text => JSON.parse(text)).then(json => {
      console.log(json)
      setState({
        data: json,
        loading: false
      })
    })
  }, [url])
  return state
}
