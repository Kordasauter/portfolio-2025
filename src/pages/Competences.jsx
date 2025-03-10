import React from 'react'

import '../styles/competences.scss'

import comp from '../datas/competences.json'
function Competences(props) {
	return (
		<section id='competencesSection' className='section'>
			<h2>Compétences</h2>
			<div>
				<div className='description'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed non risus. Suspendisse lectus tortor, dignissim sit
						amet, adipiscing nec, ultricies sed, dolor. Cras
						elementum ultrices diam. Maecenas ligula massa, varius
						a, semper congue, euismod non, mi. Proin porttitor, orci
						nec nonummy molestie, enim est eleifend mi, non
						fermentum diam nisl sit amet erat
					</p>
				</div>

				<div className='competences'>
					<div className='categorie'>
						<h3 className='frontEnd'>Front End</h3>
						<ul>{createList(comp, 'front')}</ul>
					</div>
					<div className='categorie'>
						<h3 className='backEnd'>Back End</h3>
						<ul>{createList(comp, 'back')}</ul>
					</div>
					<div className='categorie'>
						<h3 className='bdd'>Base De Données</h3>
						<ul>{createList(comp, 'bdd')}</ul>
					</div>
				</div>
			</div>
			<div className='placeHolder' />
		</section>
	)
}

export default Competences

function createList(data, type) {
	return data[type]?.map((c, index) => (
		<li key={type + index}>
			<img src={'./images/logos/' + c.name + '.png'} alt={c.name} />
			{c.name}
		</li>
	))
}
