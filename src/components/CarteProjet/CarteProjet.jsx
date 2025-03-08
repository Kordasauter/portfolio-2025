import React from 'react'

import '../../styles/carteProjet.scss'

function CarteProjet(props) {
	return (
		<div className={props.display === true ? 'carte ' : 'carteVide'}>
			{props.display === true ? afficherImage(props.imageURL) : null}
			{props.display === true ? afficherTexte(props.texte) : null}
			{/* <div className='image'>{props.imageURL}</div> */}
			{/* <div className='descTexte'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
				risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
				nec, ultricies sed, dolor.
			</div> */}
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
