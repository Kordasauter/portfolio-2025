import React, { useEffect, useRef, useState } from 'react'

import CarteProjet from '../components/CarteProjet/CarteProjet'

import arrow from '../assets/left-arrow.svg'

import '../styles/projets.scss'

function Projets(props) {
	const [projetCentral, setProjetCentral] = useState(0)
	const ref = useRef()

	const handleClickForward = () => {
		if (projetCentral < listeProjets.length - 1)
			setProjetCentral(projetCentral + 1)
	}

	const handleClickBackward = () => {
		if (projetCentral > 0) setProjetCentral(projetCentral - 1)
	}

	useEffect(() => {
		ref.current.style.left = 45 - (30 + 2) * projetCentral + 'rem'
		// console.log(projetCentral)
	}, [projetCentral])

	const texte =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non	risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'

	const listeProjets = [
		{ url: '1', texte: '1' + texte + '1' },
		{ url: '2', texte: '2' + texte + '2' },
		{ url: '3', texte: '3' + texte + '3' },
		{ url: '4', texte: '4' + texte + '4' },
		{ url: '5', texte: '5' + texte + '5' },
		{ url: '6', texte: '6' + texte + '6' },
		{ url: '7', texte: '7' + texte + '7' },
		{ url: '8', texte: '8' + texte + '8' },
	]

	return (
		<section id='projetsSection' className='section'>
			<div className='projets'>
				<h2>Projets</h2>
				<div className='button btnLeft' onClick={handleClickBackward}>
					<img src={arrow} alt='left arrow' />
				</div>
				<div className='button btnRight' onClick={handleClickForward}>
					<img src={arrow} alt='left arrow' />
				</div>
				<div className='cardContainer' ref={ref}>
					{/* <CarteProjet imageURL={''} display={false} texte={''} /> */}
					{listeProjets.map((projet, index) => (
						<CarteProjet
							imageURL={projet.url}
							display={true}
							texte={projet.texte}
							selected={projetCentral === index}
							key={'projet' + index}
						/>
					))}
					{/* <CarteProjet imageURL={''} display={false} texte={''} /> */}
				</div>
			</div>
		</section>
	)
}

export default Projets
