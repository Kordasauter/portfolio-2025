import React from 'react'

import '../styles/accueil.scss'

function Accueil(props) {
	return (
		<section id='accueilSection' className='section'>
			<div className='accueil'>
				<div className='description'>
					<h1>développeur web</h1>
					<p>
						Développeur web passionné, j’ai évolué du C++ au
						scripting avant de me spécialiser en développement web.
						Curieux et motivé, j’aime apprendre et relever de
						nouveaux défis techniques.
					</p>
				</div>
				<div className='cvBouton'>
					<a
						href='./CV/Développeur_Web_Fullstack-Mickael_Vivens.pdf'
						download='Développeur Web Fullstack-Mickael Vivens'
					>
						Téléchargez mon CV
					</a>
				</div>
			</div>
		</section>
	)
}

export default Accueil
