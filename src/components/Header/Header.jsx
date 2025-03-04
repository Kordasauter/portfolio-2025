import React from 'react'
import Nav from '../Nav/Nav'

import '../../styles/header.scss'

function Header(props) {
	return (
		<header>
			<div className='titre'>
				<h1>MICKAEL VIVENS</h1>
				<h2>DEVELOPPEUR WEB</h2>
			</div>

			<Nav />
		</header>
	)
}

export default Header
