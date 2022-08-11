import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
	return (
		<header>
			<div className="logp">
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
