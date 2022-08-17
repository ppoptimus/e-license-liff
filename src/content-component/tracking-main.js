import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

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

	const [requestCode, setRequestCode] = useState('')

	const trackingDetail = (requestCode) => {
		// setRequest((state) => state.filter((item) => item.requestCode === requestCode))
		console.log(requestCode)
		// navigate('/tracking-detail')
	}
	const onSearchChange = (e) => {
		setRequestCode(e.target.value)
	}
	const onSearchClick = () => {
		console.log(requestCode)
	}
	return (
		<div className='container'>
			<div className='d-flex align-items-center justify-content-center mt-3 mx-3'>
				<input
					className='form-control form-control-lg me-sm-2 rounded-pill rounded-end'
					type='text'
					placeholder='เลขที่คำขอ'
					onChange={onSearchChange}
					value={requestCode}
				/>
				<button className='btn btn-lg btn-secondary my-2 my-sm-0 rounded-pill rounded-start' onClick={onSearchClick}>
					ค้นหา
				</button>
			</div>
			<div className='d-flex flex-column mt-3 p-3'>
				<b className='text-secondary fs-5'>{licenseRequest ? 'คำขอใบอนุญาต' : 'รายการคำขอ'}</b>
				<div className='d-flex flex-column w-auto mt-2' onClick={() => trackingDetail('1')}>
					<div className='card card_red mb-3'>
						<div className='card-body'>
							<p className='card-title fs-6'>{licenseRequest.requestName}</p>
						</div>
					</div>
				</div>
			</div>

			<div className='d-flex flex-column mt-3 p-3'>
				<b className='text-secondary fs-5'>รายการคำขอ</b>
				{request
					? request.map((i) => (
							<div
								className='d-flex flex-column w-auto mt-2'
								key={i.requestCode}
								onClick={() => trackingDetail(i.requestCode)}>
								<div className='card card_three mb-3'>
									<div className='card-body'>
										<p className='card-title'>{i.requestName}</p>
									</div>
								</div>
							</div>
					  ))
					: ''}
			</div>
		</div>
	)
}

export default Tracking
