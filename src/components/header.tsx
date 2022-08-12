import React from 'react'
import { Link } from 'react-router-dom'
import logo_img from '../images/Title_Img_Black.svg'

const header = () => {
	return (
		<header>
			<div className="logo">
				<Link to="/">
					<img src={logo_img} className="App-logo" alt="HOSHINO SOFTWARE" />
				</Link>

				<nav>
					<ul>
						<li>
							<Link to="/">HOME</Link>
						</li>
						<li>
							<Link to="/contact">CONTACT</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default header
