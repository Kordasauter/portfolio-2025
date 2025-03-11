import React, { useEffect, useRef, useState } from 'react'

import CarteProjet from '../components/CarteProjet/CarteProjet'

import arrow from '../assets/left-arrow.svg'

import '../styles/projets.scss'
import variables from '../styles/utils/_variables.scss'

function Projets(props) {
	// console.log(variables.headerSize)
	const [projetCentral, setProjetCentral] = useState(0)
	const cardContainer = useRef()
	const projectsList = useRef()

	const handleClickForward = () => {
		if (projetCentral < listeProjets.length - 1)
			setProjetCentral(projetCentral + 1)
	}

	const handleClickBackward = () => {
		if (projetCentral > 0) setProjetCentral(projetCentral - 1)
	}

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

	useEffect(() => {
		// ref.current.style.right = (30 + 2) * projetCentral + 'rem'
		let cardSize = Number(
			window.innerWidth >= 768
				? variables.cardSizeWide
				: variables.cardSizeMobile
		)
		let gapSize = Number(
			window.innerWidth >= 768
				? variables.cardGapWide
				: variables.cardGapMobile
		)

		cardContainer.current.style.left =
			-(cardSize / 2) - (cardSize + gapSize) * projetCentral + 'vw'
	}, [listeProjets.length, projetCentral])

	return (
		<section id='projetsSection' className='section'>
			<div className='projets'>
				<h2>Projets</h2>
				<div className='projectsList' ref={projectsList}>
					<div className='cardContainer' ref={cardContainer}>
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
				<div className='button btnLeft' onClick={handleClickBackward}>
					<img src={arrow} alt='left arrow' />
				</div>
				<div className='button btnRight' onClick={handleClickForward}>
					<img src={arrow} alt='left arrow' />
				</div>
			</div>
		</section>
	)
}

export default Projets
