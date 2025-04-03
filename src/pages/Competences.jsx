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
						Grâce à mon parcours en administration réseau et à ma
						formation en développement web, j’ai acquis des
						compétences solides en <b>JavaScript</b>, <b>PHP</b>,{' '}
						<b>TypeScript</b>, <b>SQL</b>, <b>NoSQL</b> et en
						frameworks comme <b>React</b>, <b>Angular</b> et{' '}
						<b>NodeJS</b>. Je maîtrise également les <b>API REST</b>
						, <b>GIT</b> et les méthodologies <b>agiles</b>. Ma
						polyvalence et ma capacité d’adaptation me permettent de
						concevoir des applications performantes et optimisées.
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
			<img
				src={'./images/logos/' + c.name + '.png'}
				alt={'logo ' + c.name}
			/>
			{c.name}
		</li>
	))
}
