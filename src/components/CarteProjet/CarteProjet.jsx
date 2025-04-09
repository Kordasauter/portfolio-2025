import React from 'react'

import '../../styles/carteProjet.scss'

function CarteProjet(props) {
	return (
		<div className={'carte '}>
			{afficherImage(props.projet.titre)}
			{afficherTexte(props.projet)}
			{afficherCompetences(props.projet)}
		</div>
	)
}

function afficherImage(imageURL) {
	return (
		<img
			className='image'
			src={'./images/sites/' + imageURL + '.png'}
			alt={'site ' + imageURL}
		/>
	)
}

function afficherTexte(texte) {
	return (
		<div className='descTexte'>
			<p className='title'>Type de projet : </p>
			<p className='text'>{texte?.type}</p>
			<p className='title'>Contexte : </p>
			<p className='text'>{texte?.texte}</p>
			<p className='title'>Lien vers le projet : </p>
			<p className='text'>
				<a href={texte?.url} target='_blank' rel='noreferrer'>
					{texte?.titre}
				</a>
			</p>
		</div>
	)
}

function afficherCompetences(projet) {
	return (
		<div className='competences'>
			{projet?.techno.map((tech) => (
				<div className='techno' key={'techno ' + tech}>
					<img
						src={'./images/logos/' + tech + '.png'}
						alt={'logo ' + tech}
					/>
					<div>{tech}</div>
				</div>
			))}
		</div>
	)
}

export default CarteProjet
