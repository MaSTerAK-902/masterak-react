import React from 'react'
import { Link } from 'react-router-dom'
import TranText from '../components/TranText'
import ProfileImage from '../components/ProfileImage'
import styled from 'styled-components'

const HomeStyle = styled.div`
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 4rem;
		row-gap: 2rem;
	}
`

const home = () => {
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
		<HomeStyle>
			<div className="container">
				<TranText />
				<ProfileImage />
				<div className="flex_container">
					<div className="box github_link" onClick={linkClick_Github} />
					<div className="box twitter_link" onClick={linkClick_Twitter} />
					<div className="box zenn_link" onClick={linkClick_Zenn} />
					<Link to="/contact">
						<div className="box contact_link" />
					</Link>
				</div>
			</div>
		</HomeStyle>
	)
}

export default home
