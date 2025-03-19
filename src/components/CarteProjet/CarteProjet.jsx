import React from 'react'

import '../../styles/carteProjet.scss'

function CarteProjet(props) {
	return (
		<div
			className={
				'carte ' + (props.selected ? 'selected' : 'notSelected')
				// props.display
				// 	? 'carte ' + props.className
				// 	: 'carteVide ' + props.className
			}
		>
			{afficherImage(props.imageURL)}
			{afficherTexte(props.texte)}
		</div>
	)
}

function afficherImage(imageURL) {
	// return <div className='image'>{imageURL}</div>
	return (
		<img
			className='image'
			src={'./images/sites/' + imageURL + '.png'}
			alt={'site ' + imageURL}
		/>
	)
}

function afficherTexte(texte) {
	return <div className='descTexte'>{texte}</div>
}

export default CarteProjet
