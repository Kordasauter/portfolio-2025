import React from 'react'

function Nav(props) {
	return (
		<nav>
			<ul>
				<li>
					<a href='./'>Accueil</a>
				</li>
				<li>
					<a href='./competences'>Compétences</a>
				</li>
				<li>
					<a href='./experiences'>Expériences</a>
				</li>
				<li>
					<a href='./projets'>Projets</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
