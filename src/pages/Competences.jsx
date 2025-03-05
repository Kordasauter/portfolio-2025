import React from 'react'

import '../styles/competences.scss'
function Competences(props) {
	return (
		<section id='competences'>
			<div className='description'>
				<h2>Compétences</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					non risus. Suspendisse lectus tortor, dignissim sit amet,
					adipiscing nec, ultricies sed, dolor. Cras elementum
					ultrices diam. Maecenas ligula massa, varius a, semper
					congue, euismod non, mi. Proin porttitor, orci nec nonummy
					molestie, enim est eleifend mi, non fermentum diam nisl sit
					amet erat
				</p>
			</div>

			<div className='competences'>
				<div>
					<h3 className='frontEnd'>Front End</h3>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ul>
				</div>
				<div>
					<h3 className='backEnd'>Back End</h3>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ul>
				</div>
				<div>
					<h3 className='bdd'>Base De Données</h3>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Competences
