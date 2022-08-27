import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import Contact from './page/contact'
import Header_ from './components/header'
import Footer_ from './components/footer'

export const App = () => {
	return (
		<Router>
			<div className="App">
				<Header_ />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer_ />
			</div>
		</Router>
	)
}
