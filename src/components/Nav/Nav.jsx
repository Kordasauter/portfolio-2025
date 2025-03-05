import React from 'react'

function Nav(props) {
	// const pathname = window.location.pathname
	return (
		<nav>
			<ul>
				<li>
					<a
						// className={pathname === '/' ? 'active' : 'notActive'}
						className='notActive'
						href='./#accueil'
					>
						Accueil
					</a>
				</li>
				<li>
					<a
						// className={
						// 	pathname === '/competences' ? 'active' : 'notActive'
						// }
						className='notActive'
						href='./#competences'
					>
						Compétences
					</a>
				</li>
				{/* <li>
					<a
						// className={
						// 	pathname === '/experiences' ? 'active' : 'notActive'
						// }
						className='notActive'
						href='./#experiences'
					>
						Expériences
					</a>
				</li> */}
				<li>
					<a
						// className={
						// 	pathname === '/projets' ? 'active' : 'notActive'
						// }
						className='notActive'
						href='./#projets'
					>
						Projets
					</a>
				</li>
				<li>
					<a
						// className={
						// 	pathname === '/contact' ? 'active' : 'notActive'
						// }
						className='notActive'
						href='./#contact'
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
