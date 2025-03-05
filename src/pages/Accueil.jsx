import React from 'react'

import '../styles/accueil.scss'

function Accueil(props) {
	return (
		<section id='accueil'>
			<div className='accueil'>
				<div className='description'>
					<h1>développeur web</h1>
					<p>
						J'ai toujours développé pour le plaisir, mais après près
						de 8 ans dans l'administration système et réseau, j'ai
						eu l'opportunité de me spécialiser dans le développement
						web. C'est pourquoi j'ai suivi une formation qui m'a
						permis de parfaire toutes les compétences nécessaires à
						ce type de poste.
					</p>
				</div>
				<div className='cvBouton'>Téléchargez mon CV</div>
			</div>

			{/* <div className='photo'>
				<img src='./images/photos/photo3.png' alt='moi' />
			</div> */}
		</section>
	)
}

export default Accueil
