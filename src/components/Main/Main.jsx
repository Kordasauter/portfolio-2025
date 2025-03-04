import React from 'react'

import Accueil from '../../pages/Accueil'
import Competences from '../../pages/Competences'
import Experiences from '../../pages/Experiences'
import Projets from '../../pages/Projets'

import '../../styles/main.scss'
function Main({ children }) {
	return (
		<main>
			{/* <div className='mainChild'>{children}</div> */}
			<Accueil />
			<Competences />
			<Experiences />
			<Projets />
		</main>
	)
}

export default Main
