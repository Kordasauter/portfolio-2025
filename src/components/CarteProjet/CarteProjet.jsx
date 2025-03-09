import React from 'react'

import '../../styles/carteProjet.scss'

function CarteProjet(props) {
	if (props.selected) console.log(props.imageURL)
	return (
		<div
			className={
				'carte ' + (props.selected ? 'selected' : 'notSelected')
				// props.display
				// 	? 'carte ' + props.className
				// 	: 'carteVide ' + props.className
			}
		>
			{props.display === true ? afficherImage(props.imageURL) : null}
			{props.display === true ? afficherTexte(props.texte) : null}
		</div>
	)
}

function afficherImage(imageURL) {
	return <div className='image'>{imageURL}</div>
}

function afficherTexte(texte) {
	return <div className='descTexte'>{texte}</div>
}

export default CarteProjet
