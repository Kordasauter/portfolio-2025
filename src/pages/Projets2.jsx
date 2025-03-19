import React, { /*useEffect,*/ useRef, useState } from 'react'

// import CarteProjet from '../components/CarteProjet/CarteProjet'

import leftArrow from '../assets/left-arrow.svg'
import rightArrow from '../assets/right-arrow.svg'

import '../styles/projets2.scss'
// import variables from '../styles/utils/_variables.scss'
import projets from '../datas/projets.json'

function Projets2(props) {
	// console.log(variables.headerSize)
	const [projetCentral, setProjetCentral] = useState(0)
	const [currentProject, setCurrentProject] = useState(Number(0))
	// const cardContainer = useRef()
	const projectsList = useRef()

	const handleClickForward = () => {
		if (projetCentral < listeProjets.length - 1)
			setProjetCentral(projetCentral + 1)
	}

	const handleClickBackward = () => {
		if (projetCentral > 0) setProjetCentral(projetCentral - 1)
	}

	function displayInfo(num) {
		setCurrentProject(num)
	}

	const listeProjets = createListProjects(projets)

	// useEffect(() => {
	// 	let cardSize = Number(
	// 		window.innerWidth >= 768
	// 			? variables.cardSizeWide
	// 			: variables.cardSizeMobile
	// 	)
	// 	let gapSize = Number(
	// 		window.innerWidth >= 768
	// 			? variables.cardGapWide
	// 			: variables.cardGapMobile
	// 	)

	// 	cardContainer.current.style.left =
	// 		-(cardSize / 2) - (cardSize + gapSize) * projetCentral + 'vw'
	// }, [listeProjets.length, projetCentral])
	return (
		<section id='projetsSection2' className='section'>
			<div className='projets'>
				<h2>Projets</h2>

				<div className='projectsContainer' ref={projectsList}>
					<div className='projectsWindow'>
						<div className='projectSelection'>
							<div
								className='button2 btnLeft2'
								onClick={handleClickBackward}
							>
								<img src={leftArrow} alt='left arrow' />
							</div>

							<div className='projectList'>
								{listeProjets.map((projet, index) => (
									<div
										className={
											index === currentProject
												? 'imageProject current'
												: 'imageProject'
										}
										onClick={() => displayInfo(index)}
										key={'imgProjet' + projet?.url}
									>
										{afficherImage(projet)}
									</div>
								))}
							</div>
							<div
								className='button2 btnRight2'
								onClick={handleClickForward}
							>
								<img src={rightArrow} alt='right arrow' />
							</div>
						</div>

						<div className='projectDisplay'>
							<div className='photo'>
								<img
									src={
										'./images/sites/' +
										listeProjets[currentProject]?.url +
										'.png'
									}
									alt={
										'./images/sites/' +
										listeProjets[currentProject]?.url +
										'.png'
									}
								/>
							</div>
							<div className='competences'>
								{listeProjets[currentProject]?.techno.map(
									(tech) => (
										<div
											className='techno'
											key={'techno ' + tech}
										>
											{tech}
										</div>
									)
								)}
							</div>
							<div className='description'>
								<p className='title'>Type de projet : </p>
								<p className='text'>
									{listeProjets[currentProject]?.type}
								</p>
								<p className='title'>Contexte : </p>
								<p className='text'>
									{listeProjets[currentProject]?.texte}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projets2

function createListProjects(projets) {
	let listeProjets = []
	projets.map((projet) =>
		listeProjets.push({
			titre: projet.Title,
			url: projet.Title,
			texte: projet.Description,
			techno: projet.Technologies,
			type: projet.Type,
		})
	)
	return listeProjets
}

function afficherImage(projet) {
	return (
		<img
			src={'./images/sites/' + projet?.url + '.png'}
			alt={'site ' + projet.url}
		/>
	)
}
