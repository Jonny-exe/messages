import React from 'react'
const LoginInptus = () => {
  return (
    <div className="logins">
      <input type="text" onChange={handleInput} className="loginInputs" placeholder="Username"></input>
      <button type="button" onClick={sendInput} className="loginInputs">Send</button>
    </div>
  )
}
