import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Tracking = () => {
	const navigate = useNavigate()
	const [licenseRequest] = useState({
		requestCode: '001',
		requestName: 'คำขอใบอนุญาตนำคนต่างด้าวมาทำงานกับนายจ้างในประเทศ',
		requestStatus: 5,
	})
	const [request] = useState([
		{ requestCode: '002', requestName: 'คำขอจดทะเบียนลูกจ้าง', requestStatus: 5 },
		{ requestCode: '003', requestName: 'คำขอจัดตั้งสำนักงานชั่วคราว', requestStatus: 1 },
	])
	const [tempRequest, setTempRequest] = useState(request)

	const [requestCode, setRequestCode] = useState('')

	const trackingLicense = (requestCode) => {
		// setRequest((state) => state.filter((item) => item.requestCode === requestCode))
		// console.log(requestCode)
		navigate('/preview')
	}

	const onSearchChange = (e) => {
		setRequestCode(e.target.value)
	}
	const onSearchClick = () => {
		const filtered = request.filter((obj) => {
			return obj.requestCode === requestCode
		})
		setTempRequest(filtered)
		console.log(requestCode.length)
	}
	const onTrackingRequest = () => {
		navigate('/tracking-detail')
	}
	return (
		<div className='container bg-main vh-100'>
			
			<div className='d-flex flex-column mt-4 p-3'>
				<b className='text-info fs-5'>{licenseRequest ? 'คำขอใบอนุญาต' : 'รายการคำขอ'}</b>
				<div className=' w-auto mt-2' onClick={() => trackingLicense('001')}>
					<div className='card card_red mb-3 rounded-pill'>
						<div className='card-body'>
							<p className='card-title fs-6'>{licenseRequest.requestName}</p>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className='d-flex flex-column mt-3 p-3'>
				<b className='text-info fs-5'>รายการคำขอ</b>
				{request ? (
					<>
						<div className='d-flex align-items-center justify-content-start mt-1'>
							<input
								className='form-control form-control-lg me-sm-2 rounded-pill rounded-end'
								type='text'
								placeholder='เลขที่คำขอ'
								onChange={onSearchChange}
							/>
							<button
								className='btn btn-lg bg-white my-2 my-sm-0 rounded-pill rounded-start'
								style={{ border: 'solid 1px #d6d6d6' }}
								onClick={onSearchClick}>
								<FontAwesomeIcon icon={faSearch} />
							</button>
						</div>
					</>
				) : (
					''
				)}

				{tempRequest.length !== 0 || requestCode.length !== 0
					? tempRequest.map((i) => (
							<div className=' w-auto mt-2' key={i.requestCode} onClick={() => onTrackingRequest(i.requestCode)}>
								<div className='card card_three mb-3  rounded-pill'>
									<div className='card-body'>
										<p className='card-title fs-6'>{i.requestName}</p>
									</div>
								</div>
							</div>
					  ))
					: request.map((i) => (
							<div className=' w-auto mt-2' key={i.requestCode} onClick={() => onTrackingRequest(i.requestCode)}>
								<div className='card card_three mb-3  rounded-pill'>
									<div className='card-body'>
										<p className='card-title fs-6'>{i.requestName}</p>
									</div>
								</div>
							</div>
					  ))}
			</div>
		</div>
	)
}

export default Tracking
