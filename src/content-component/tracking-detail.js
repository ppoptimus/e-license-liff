import React, { useState } from 'react'
import './adminlte.min.css'

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
		{
			step: 4,
			date: '23/08/2565',
			status_id: 4,
			status: 'เจ้าหน้าที่ออกตรวจสถานที่',
		},
		{
			step: 5,
			date: '25/08/2565',
			status_id: 5,
			status: 'ผ่านการออกตรวจสถานที่',
		},
		{
			step: 6,
			date: '27/08/2565',
			status_id: 6,
			status: 'อยู่ในขั้นตอนนายทะเบียนพิจราณา',
		},
	])

	const [statusColor, setStatusColor] = useState('body')

	return (
		<>
			{/* <div className='container mt-3 p-3'>
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
			</div> */}
			<section className='content mb-5'>
				<div className='row mx-1 my-3'>
					<h3 className='card-title fw-bolder'>คำขอใบอนุญาตนำคนต่างด้าวมาทำงานกับนายจ้างในประเทศ</h3>
				</div>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='timeline'>
								<div className='time-label'>
									<span className='bg-red'>8 days ago</span>
								</div>
								{trackData
									? trackData
											.sort((a, b) => b.step - a.step)
											.map((i) => (
												<div key={i.step} className='mt-4'>
													<i className={'fas fa-envelope status'+ i.status_id} />
													<div className='timeline-item'>
														<span className='time'>
															<i className='fas fa-clock' /> {i.date}
														</span>
														<h3 className='timeline-header'>
														{i.status}
														</h3>
													</div>
												</div>
											))
									: ''}

								{/* <div>
									<i className='fas fa-envelope bg-blue' />
									<div className='timeline-item'>
										<span className='time'>
											<i className='fas fa-clock' /> 22/08/2565
										</span>
										<h3 className='timeline-header'>
											<a href='#'>Support Team</a> sent you an email
										</h3>
									</div>
								</div>

								<div>
									<i className='fas fa-user bg-green' />
									<div className='timeline-item'>
										<span className='time'>
											<i className='fas fa-clock' /> 21/08/2565
										</span>
										<h3 className='timeline-header no-border'>
											<a href='#'>Sarah Young</a> accepted your friend request
										</h3>
									</div>
								</div>

								<div>
									<i className='fas fa-comments bg-yellow' />
									<div className='timeline-item'>
										<span className='time'>
											<i className='fas fa-clock' />
											21/08/2565
										</span>
										<h3 className='timeline-header'>
											<a href='#'>Jay White</a> commented on your post
										</h3>
									</div>
								</div>

								<div>
									<i className='fa fa-camera bg-purple' />
									<div className='timeline-item'>
										<span className='time'>
											<i className='fas fa-clock' /> 2 days ago
										</span>
										<h3 className='timeline-header'>
											<a href='#'>Mina Lee</a> uploaded new photos
										</h3>
									</div>
								</div>

								<div>
									<i className='fas fa-video bg-maroon' />
									<div className='timeline-item'>
										<span className='time'>
											<i className='fas fa-clock' /> 20/08/2565
										</span>
										<h3 className='timeline-header'>
											<a href='#'>Mr. Doe</a> shared a video
										</h3>
									</div>
								</div> */}

								{/* <div>
									<i className='fas fa-clock bg-gray' />
									
								</div> */}
								<div className='time-label'>
									<span className='bg-secondary text-center px-3'>Start</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default TrackingDetail
