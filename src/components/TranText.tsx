import React from 'react'
import styled from 'styled-components'

const TTStyle = styled.div`
	.Text p{
		font-size: 1.2rem;
		color: var(--dark-font);
	}
`

const TranText = () => {
	return (
		<TTStyle>
			<div className="Text">
				<p>Hi! I&apos;m masterak</p>
			</div>
		</TTStyle>
	)
}

export default TranText
