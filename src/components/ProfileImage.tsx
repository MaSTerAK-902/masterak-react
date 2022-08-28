import React from 'react'
import styled from 'styled-components'
import profile from '../images/masterak.png'

const PIStyle = styled.div`
	.masterak {
		height: 200px;
		width: 200px;
		border-radius: 50%;
		border: 1px solid #969696;
		background-repeat: no-repeat;
        background-image: url(${profile});
		background-position: 70% 50%;
		background-size: 170px;
        
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
