import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Preview from './content-component/preview-license'
import TrackingDetail from './content-component/tracking-detail'
import Tracking from './content-component/tracking-main'
import Wrongpage from './content-component/wrongpage'
import Footer from './menu-component/footer'

import { useLiff } from 'react-liff'
import Login from './login'

function App() {
	const { error, isLoggedIn, isReady, liff } = useLiff()
	const [displayName, setDisplayName] = useState('')

	const [userLogged] = useState(localStorage.getItem("user"));

	useEffect(() => {
		if (!isLoggedIn) return

		//-----------Get Line Profile------------//
		;(async () => {
			const profile = await liff.getProfile()
			setDisplayName(profile.displayName)
		})()

	}, [liff, isLoggedIn])

	const showDisplayName = () => {
		if (error) return <p>Something is wrong. {error}</p>
		if (!isReady) return <p>Loading...</p>

		if (!isLoggedIn /* ถ้าเข้าผ่านไลน์ */) {
			if (userLogged) {
				return <Tracking />
			} else {
				return <Login />
			}
		} else {
			return <Wrongpage />
		}

	}
	const showFooter = () => {
		if (userLogged) {
			return <Footer />
		} else {
			return ''
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
			{showFooter()}
		</>
	)
}

export default App
