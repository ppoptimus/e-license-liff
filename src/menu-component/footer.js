import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faHomeAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import ReloadPage from '../function-component/reload-page'

const Footer = (prop) => {
	const navigate = useNavigate()

	const onPrevious = () =>{
		if(prop.param ==='location'){
			ReloadPage();
		}
		else{
			navigate(-1)
		}
	}

	const onHome = () =>{
		if(prop.param ==='location'){
			ReloadPage();
		}
		else{
			navigate(-1)
		}
	}
	
	return (
		<>
			<div className='fixed-bottom'>
				<footer className='pt-3'>
					<ul className='nav justify-content-around'>
						<li className='nav-item text-center' onClick={onPrevious}>
							<FontAwesomeIcon icon={faArrowAltCircleLeft} className='fs-1' />
							<p>Back</p>
						</li>
						<li className='nav-item text-center' onClick={onHome}>
							<FontAwesomeIcon icon={faHomeAlt} className='fs-1' />
							<p>Home</p>
						</li>
						{/* <li className='nav-item text-center' onClick={onLogout}>
							<FontAwesomeIcon icon={faSignOutAlt} className='fs-1' />
							<p>Logout</p>
						</li> */}
						
					</ul>
				</footer>
			</div>
		</>
	)
}

export default Footer
