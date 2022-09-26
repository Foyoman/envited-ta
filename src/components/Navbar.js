import React from 'react'
import icon from '../images/icon.jpeg'

export default function Navbar() {
	return (
		<div className='navbar'>
			<a href="/">
				<div className='logo'>
					<img src={ icon } alt="envited logo" />
					e-vited
				</div>
			</a>
			<button className='login-signup'>
				Login / Signup
			</button>
		</div>
	)
}
