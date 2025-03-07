import React from 'react'

import Accueil from '../../pages/Accueil'
import Competences from '../../pages/Competences'
// import Experiences from '../../pages/Experiences'
import Projets from '../../pages/Projets'
import Contact from '../../pages/Contact'

import '../../styles/main.scss'
function Main({ children }) {
	return (
		<main>
			<span id='accueil' className='anchor' />
			<Accueil />
			<span id='competences' className='anchor' />
			<Competences />
			<span id='projets' className='anchor' />
			<Projets />
			<span id='contact' className='anchor' />
			<Contact />
		</main>
	)
}

export default Main
