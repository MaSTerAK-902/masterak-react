import React, { useState } from 'react'
import './style.scss'

const message_array = ['Hi! My name is Masterak.', 'I am Engineer.', 'ゆっくりしていってね！']

const home = () => {
	const [counter, setCount] = useState(0)
	const useCountUp = () => {
		setCount(counter + 1)
		if (counter == 2) {
			setCount(0)
		}
	}
	setInterval(useCountUp, 5000)
	return (
		<div className="container">
			<div className="comment">
				<p>{message_array[counter]}</p>
			</div>
			<div className="character">
				<p>ここにはキャラクター画像が入ります。</p>
			</div>
			<div className="links">
				<p>ここにはリンクが入ります。</p>
			</div>
		</div>
	)
}

export default home
