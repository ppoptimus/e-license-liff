import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Preview from './content-component/preview-license'
import TrackingDetail from './content-component/tracking-detail'
import Tracking from './content-component/tracking-main'
import Wrongpage from './content-component/wrongpage'
import Footer from './menu-component/footer'

import { useLiff } from 'react-liff'

function App() {
	const { error, isLoggedIn, isReady, liff } = useLiff()
	const [displayName, setDisplayName] = useState('')

	useEffect(() => {
		if (!isLoggedIn) return

		;(async () => {
			const profile = await liff.getProfile()
			setDisplayName(profile.displayName)
		})()
	}, [liff, isLoggedIn])

	const showDisplayName = () => {
		if (error) return <p>Something is wrong.</p>
		if (!isReady) return <p>Loading...</p>

		if (!isLoggedIn) {
			return (
				<button className='App-button' onClick={liff.login}>
					Login
				</button>
			)
		}
		
	}
	return (
		<>
    <header>{showDisplayName()}</header>
			<Routes>
				<Route path='tracking' element={<Tracking />} />
				<Route path='tracking-detail' element={<TrackingDetail />} />
				<Route path='preview' element={<Preview />} />
				<Route path='*' element={<Wrongpage />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
