import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faHomeAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
	const navigate = useNavigate()
	
	return (
		<>
			<div className='fixed-bottom'>
				<footer className='pt-3'>
					<ul className='nav justify-content-around'>
						<li className='nav-item text-center' onClick={() => navigate(-1)}>
							<FontAwesomeIcon icon={faArrowAltCircleLeft} className='fs-1' />
							<p>Back</p>
						</li>
						<li className='nav-item text-center' onClick={() => navigate("/tracking")}>
							<FontAwesomeIcon icon={faHomeAlt} className='fs-1' />
							<p>Home</p>
						</li>
						
					</ul>
				</footer>
			</div>
		</>
	)
}

export default Footer
