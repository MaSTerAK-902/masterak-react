import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import twitter_img from '../images/Twitter_logo.svg'
import github_img from '../images/Github_logo.svg'
import zenn_img from '../images/Zenn_logo.svg'
import contact_img from '../images/Contact_icon.svg'

const LinkButtonStyle = styled.div`
	.LinkButtonContainer {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		width: 620px;
        gap: 20px;
	}

	.LinkButton {
		width: 300px;
		height: 150px;
		border: 1px solid var(--dark-border);
		border-radius: 15px;
        background-position: center;
		box-shadow: 2px 2px rgba(153, 153, 153, 0.2);
		background-repeat: no-repeat;
		cursor: pointer;
	}

    .github{
        background-size: 60%;
        background-image: url(${github_img});
    }
    .twitter{
        background-size: 60%;
        background-image: url(${twitter_img});
    }
    .zenn{
        background-size: 60%;
        background-image: url(${zenn_img});
    }
    .contact{
        background-size: 60%;
        background-image: url(${contact_img});
    }
`

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
		<LinkButtonStyle>
			<div className="LinkButtonContainer">
				<div className="LinkButton github" onClick={linkClick_Github} />
				<div className="LinkButton twitter" onClick={linkClick_Twitter} />
				<div className="LinkButton zenn" onClick={linkClick_Zenn} />
				<Link to="/contact">
					<div className="LinkButton contact" />
				</Link>
			</div>
		</LinkButtonStyle>
	)
}
export default LinkButton
