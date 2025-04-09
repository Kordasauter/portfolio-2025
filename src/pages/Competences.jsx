import React from 'react'

import '../styles/competences.scss'

import comp from '../datas/competences.json'
function Competences(props) {
	return (
		<section id='competencesSection' className='section'>
			<h2>Compétences</h2>
			<div className='blockDesciptionCompetences'>
				<div className='description'>
					<p>
						Grâce à ma formation en développement web, j’ai acquis
						des compétences solides en <b>JavaScript</b>, <b>PHP</b>
						, <b>TypeScript</b>, <b>SQL</b>, <b>NoSQL</b> et en
						frameworks comme <b>React</b>, <b>Angular</b> et{' '}
						<b>NodeJS</b>. Je maîtrise également les <b>API REST</b>
						, <b>GIT</b> et les méthodologies <b>agiles</b>. Ma
						polyvalence et ma capacité d’adaptation me permettent de
						concevoir des applications performantes et optimisées.
						Mais surtout, j’attache une grande importance à l’écoute
						des besoins : comprendre les enjeux, dialoguer avec les
						clients ou les équipes, et proposer des solutions
						techniques pertinentes fait pleinement partie de ma
						démarche.
					</p>
				</div>

				<div className='competences'>
					<h3 className='frontEnd'>Front End</h3>
					<ul className='frontEnd'>{createList(comp, 'front')}</ul>
					<h3 className='backEnd'>Back End</h3>
					<ul className='backEnd'>{createList(comp, 'back')}</ul>
					<h3 className='gestion'>Gestion de projets</h3>
					<ul className='gestion'>{createList(comp, 'gestion')}</ul>
				</div>
			</div>
		</section>
	)
}

export default Competences

function createList(data, type) {
	return data[type]?.map((c, index) => (
		<li key={type + index}>
			<img
				src={'./images/logos/' + c.image + '.png'}
				alt={'logo ' + c.image}
			/>
			{c.name}
		</li>
	))
}
