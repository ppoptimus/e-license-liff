import React, { useEffect, useState } from 'react'
import { Routes, Route  } from 'react-router-dom'
import Preview from './content-component/preview-license'
import TrackingDetail from './content-component/tracking-detail'
import Tracking from './content-component/tracking-main'
import Wrongpage from './content-component/wrongpage'
import Footer from './menu-component/footer'

import { useLiff } from 'react-liff'
import GetLocation from './content-component/location'

function App() {
	const params = new URLSearchParams(window.location.search);
	const { error, isLoggedIn, isReady, liff } = useLiff()
	const [displayName, setDisplayName] = useState('')

	const [userLogged] = useState(localStorage.getItem("user"));

	useEffect(() => {
		// console.log(params.get("topic"))
		if (!isLoggedIn) return;

		//-----------Get Line Profile------------//
		(async () => {
			const profile = await liff.getProfile()
			setDisplayName(profile.displayName)
		})()

	}, [liff, isLoggedIn])

	const showDisplayName = () => {
		if (error) return <p>Something is wrong. {error}</p>
		if (!isReady) return <p>Loading...</p>

		if (isLoggedIn /* ถ้าเข้าผ่านไลน์ */) {
			if (params.get("topic")==='tracking') {
				return <Tracking />
			} 
			if (params.get("topic")==='location') {
				return <GetLocation />
			}else {
				return <Wrongpage />
			}
		} else {
			return <Wrongpage />
		}

	}
	
	return (
		<>
			<Routes>
				<Route path='/' element={showDisplayName()} />
				<Route path='tracking-detail' element={<TrackingDetail />} />
				<Route path='preview' element={<Preview />} />
				<Route path='*' element={<Wrongpage />} />
			</Routes>
			<Footer param={params.get("topic")} />
		</>
	)
}

export default App
