import React from 'react'
import Nav from '../Nav/Nav'

import '../../styles/header.scss'

function Header(props) {
	return (
		<header>
			<div className='titre'>
				<h2>MICKAEL VIVENS</h2>
				{/* <h2>DEVELOPPEUR WEB</h2> */}
			</div>

			<Nav />
		</header>
	)
}

export default Header
