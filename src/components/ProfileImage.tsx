import React from 'react'
import styled from 'styled-components'
import profile from '../images/masterak.png'

const PIStyle = styled.div`
	.masterak {
		height: 200px;
		width: 200px;
		border-radius: 50%;
		border: 1px solid var(--dark-border);
		background-repeat: no-repeat;
		background-image: url(${profile});
		background-position: 60% 50%;
		background-size: 140px;
	}
`

const ProfileImage = () => {
	return (
		<PIStyle>
			<div className="masterak" />
		</PIStyle>
	)
}
export default ProfileImage
