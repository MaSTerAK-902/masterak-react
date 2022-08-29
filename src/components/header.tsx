import React from 'react'
import { Link } from 'react-router-dom'
import logo_ from '../images/logo.svg'
import styled from 'styled-components'

const HeaderStyle = styled.div`
	.container {
		display: flex;
		justify-content: center;
	}
	.header_col_1 {
		padding-top: 1rem;
		flex: 0.5;
	}
`

const header = () => {
	return (
		<HeaderStyle>
			<div className="container">
				<div className="header_col_1">
					<Link to="/">
						<img src={logo_} alt="HOSHINO SOFTWARE" />
					</Link>
				</div>
			</div>
		</HeaderStyle>
	)
}

export default header
