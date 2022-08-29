import React from 'react'
import TranText from '../components/TranText'
import ProfileImage from '../components/ProfileImage'
import styled from 'styled-components'
import LinkButton from '../components/LinkButton'

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
	return (
		<HomeStyle>
			<div className="container">
				<TranText />
				<ProfileImage />
				<LinkButton />
			</div>
		</HomeStyle>
	)
}

export default home
