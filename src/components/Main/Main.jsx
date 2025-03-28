import React from 'react'

import Accueil from '../../pages/Accueil'
import Competences from '../../pages/Competences'
// import Experiences from '../../pages/Experiences'
import Projets from '../../pages/Projets'
import Contact from '../../pages/Contact'

import Projets2 from '../../pages/Projets2'

import Footer from '../Footer/Footer'

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
			<Projets2 />
			<span id='contact' className='anchor' />
			<Contact />
			<Footer />
		</main>
	)
}

export default Main
