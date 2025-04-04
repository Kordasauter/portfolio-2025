import React, { useEffect, useRef, useState } from 'react'

import CarteProjet from '../components/CarteProjet/CarteProjet'

import arrow from '../assets/left-arrow.svg'

import '../styles/projets.scss'
import variables from '../styles/utils/_variables.scss'
import projets from '../datas/projets.json'

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

	const listeProjets = createListProjects(projets)

	useEffect(() => {
		// let cardSize = Number(
		// 	window.innerWidth >= 768
		// 		? variables.cardSizeWide
		// 		: variables.cardSizeMobile
		// )
		// let gapSize = Number(
		// 	window.innerWidth >= 768
		// 		? variables.cardGapWide
		// 		: variables.cardGapMobile
		// )
		// cardContainer.current.style.left =
		// 	-(cardSize / 2) - (cardSize + gapSize) * projetCentral + 'vw'
	}, [listeProjets.length, projetCentral])

	return (
		<section id='projetsSection' className='section'>
			<div className='projets'>
				<h2>Projets</h2>
				<div className='projectsList' ref={projectsList}>
					<div className='cardContainer' ref={cardContainer}>
						{listeProjets.map((projet, index) => (
							<CarteProjet
								projet={projet}
								selected={projetCentral === index}
								key={'projet' + index}
							/>
						))}
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

function createListProjects(projets) {
	let listeProjets = []
	projets.map((projet) =>
		listeProjets.push({
			titre: projet.Title,
			url: projet.URL,
			texte: projet.Description,
			techno: projet.Technologies,
			type: projet.Type,
		})
	)
	return listeProjets
}
