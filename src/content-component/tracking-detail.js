import React, { useState } from 'react'

const TrackingDetail = () => {
	const [trackData, setTrackData] = useState([
		{
			step: 1,
			date: '20/08/2565',
			status_id: 1,
			status: 'เจ้าหน้าที่รับเรื่อง',
		},
		{
			step: 2,
			date: '21/08/2565',
			status_id: 2,
			status: 'ผ่านการตรวจสอบเอกสาร',
		},
		{
			step: 3,
			date: '22/08/2565',
			status_id: 3,
			status: 'รอรับมอบหลักประกันตัวจริง',
		},
	])

	const [statusColor, setStatusColor] = useState("body");
	
	return (
		<>
			<div className='container p-3'>
				<div className='d-flex flex-column'>
					<div className='card border-0'>
						<div className='card-body'>
							<h4 className='card-title fw-bolder'>คำขอใบอนุญาตนำคนต่างด้าวมาทำงานกับนายจ้างในประเทศ</h4>
							<small className='card-title'>2 days ago</small>
							<hr />
							<div className='container'>
								<div className='timeline-wrapper'>
									{trackData
										? trackData
												.sort((a, b) => b.step - a.step)
												.map((i) => (
													<div className={'node node' +i.status_id} key={i.step}>
														<h5>{i.status}</h5>
														<p>{i.date}</p>
													</div>
												))
										: ''}
										
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default TrackingDetail
