import React from 'react'
import './style.scss'

const message_array = ['Hi! My name is Masterak.', 'I am Engineer.', 'ゆっくりしていってね！']
let counter = 0

const countUp = () => {
	console.log(message_array[counter])
	counter = counter +1
	if(counter == 2){
		counter = 0
	}
}

setInterval(countUp, 5000)

const home = () => {
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
