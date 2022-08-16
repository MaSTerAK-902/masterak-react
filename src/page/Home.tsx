import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const home = () => {
	const linkClick_Github = () => {
		window.open('https://github.com/MaSTerAK-902', '_blank')
	}
	const linkClick_Twitter = () => {
		window.open('https://twitter.com/MaSTerAK_O2O9', '_blank')
	}
	const linkClick_Zenn = () => {
		window.open('https://zenn.dev/masterak')
	}
	const linkClick_Contact = () => {
		window.open('/contact', '_blank')
	}

	return (
		<div className="container">
			<div className="comment">
				<p>Hi! I&apos;m masterak</p>
			</div>
			<div className="masterak" />
			<div className="box_wrap">
				<div className="box github_link" onClick={linkClick_Github} />
				<div className="box twitter_link" onClick={linkClick_Twitter} />
				<div className="box zenn_link" onClick={linkClick_Zenn} />
				<Link to="/contact"><div className="box contact_link"/></Link>		
			</div>
		</div>
	)
}

export default home
