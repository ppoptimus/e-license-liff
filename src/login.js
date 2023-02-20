import React, { useState } from 'react'
import ReloadPage from './function-component/reload-page'

const Login = () => {
	const [username, setUsername] = useState('')

	const onClickLogin = () => {
		console.log(username)
		localStorage.setItem('user', username)
		ReloadPage()
	}
	return (
		<div className='container d-flex flex-column align-items-center align-content-center pt-5 px-3 bg-main'>
			<img src='img/logo.png' className='img img-fluid mt-5' width={200} />
			<div className='mt-4'>
				<h5 className='text-info'>โปรดเข้าระบบด้วยชื่อผู้ใช้ที่ได้รับทาง email</h5>
				<input
					className='form-control form-control-lg my-2 rounded-pill'
					type='text'
					placeholder='username'
					onChange={({ target }) => setUsername(target.value)}
				/>
				<input className='form-control form-control-lg my-2 rounded-pill' type='password' placeholder='password' />
				<button
					className='btn btn-lg w-100 my-2 rounded-pill'
					style={{ backgroundColor: '#F92C85', color: '#FFF' }}
					onClick={onClickLogin}>
					Login + <label>{localStorage.user}</label> 
				</button>
			</div>
		</div>
	)
}

export default Login
