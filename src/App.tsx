import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import Contact from './page/contact'
import Header_ from './components/header'

export const App = () => {
	return (
		<Router>
			<div className="App">
				<Header_ />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
	)
}
