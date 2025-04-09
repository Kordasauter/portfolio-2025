import React from 'react'

function Nav(props) {
	return (
		<nav>
			<ul>
				<li>
					<a href='./#accueil'>Accueil</a>
				</li>
				<li>
					<a href='./#competences'>Compétences</a>
				</li>
				{/* <li>
					<a href='./#experiences'>Expériences</a>
				</li> */}
				<li>
					<a href='./#projets'>Projets</a>
				</li>
				<li>
					<a href='./#contact'>Contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
