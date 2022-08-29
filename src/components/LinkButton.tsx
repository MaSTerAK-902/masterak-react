import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = () => {
	const linkClick_Github = () => {
		window.open('https://github.com/MaSTerAK-902', '_blank')
	}
	const linkClick_Twitter = () => {
		window.open('https://twitter.com/MaSTerAK_O2O9', '_blank')
	}
	const linkClick_Zenn = () => {
		window.open('https://zenn.dev/masterak', '_blank')
	}

	return (
		<div className='f-container'>
			<div className="box github_link" onClick={linkClick_Github} />
			<div className="box twitter_link" onClick={linkClick_Twitter} />
			<div className="box zenn_link" onClick={linkClick_Zenn} />
			<Link to="/contact">
				<div className="box contact_link" />
			</Link>
		</div>
	)
}
export default LinkButton
