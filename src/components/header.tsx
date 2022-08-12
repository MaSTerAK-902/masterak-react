import React from 'react'
import { Link } from 'react-router-dom'
import logo_ from '../images/Title_Img_Black.svg'

const header = () => {
	return (
		<header>
			<div className="App-logo">
				<Link to="/">
					<img src={logo_} alt="HOSHINO SOFTWARE" />
				</Link>
			</div>
		</header>
	)
}

export default header
