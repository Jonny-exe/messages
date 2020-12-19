import React from 'react'

const LoginToggle = (props: any) => {
	return (
		<div className="friendAdd">
			<button className="logoutButton button" onClick={props.logOutOnClick}>Logout</button>
		</div>
	)
}

export default LoginToggle
