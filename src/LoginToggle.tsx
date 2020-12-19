import React from 'react'

const LoginToggle = (props: any) => {
    return (
        <div className="loginToggleDiv">
            <button type="button" onClick={props.handleToggle} className="loginToggle" >👤</button>
        </div>
    )
}

export default LoginToggle
