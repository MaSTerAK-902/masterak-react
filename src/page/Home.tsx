import React from 'react'
import './style.scss'
import masterak from '../images/masterak.png'

const home = () => {
	return (
		<div className="container">
			<div className="comment">
				<p>Hi! I&apos;m masterak</p>
			</div>
			<div className="character">
				<div className='masterak' />
			</div>
			<div className="links">
				<p>ここにはリンクが入ります。</p>
			</div>
		</div>
	)
}

export default home
