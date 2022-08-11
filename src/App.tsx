import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import Contact from './page/contact'

export const App = () => {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
	)
}
