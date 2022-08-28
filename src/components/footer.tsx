import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
	.container {
		display: flex;
		justify-content: center;
		z-index: 10;
	}
	.copyright {
		position: fixed;
		bottom: 0;
		padding-bottom: 0.5rem;
		color: var(--dark-font);
	}
`

const footer = () => {
	return (
		<FooterStyle>
			<div className="container">
				<div className="copyright">&copy;2022 - masterak.jp</div>
			</div>
		</FooterStyle>
	)
}

export default footer
