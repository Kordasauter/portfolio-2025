import React, { useEffect, useRef, useState } from 'react'

// import CarteProjet from '../components/CarteProjet/CarteProjet'

import leftArrow from '../assets/left-arrow.svg'
import rightArrow from '../assets/right-arrow.svg'

import '../styles/projets2.scss'
import variables from '../styles/utils/_variables.scss'
import projets from '../datas/projets.json'

function Projets2(props) {
	// console.log(variables.headerSize)
	const [projetCentral, setProjetCentral] = useState(0)
	const [currentProject, setCurrentProject] = useState(Number(0))
	// const cardContainer = useRef()
	const projectsList = useRef()

	const handleClickForward2 = () => {
		if (projetCentral < listeProjets.length - 5)
			setProjetCentral(projetCentral + 1)
	}

	const handleClickBackward2 = () => {
		if (projetCentral > 0) setProjetCentral(projetCentral - 1)
	}

	function displayInfo(num) {
		setCurrentProject(num)
	}

	const listeProjets = createListProjects(projets)

	useEffect(() => {
		projectsList.current.style.left = -20 * projetCentral + '%'
	}, [listeProjets.length, projetCentral])
	return (
		<section id='projetsSection2' className='section'>
			<div className='projets'>
				<h2>Projets</h2>

				<div className='projectsContainer'>
					<div className='projectsWindow'>
						<div className='projectSelection'>
							<div
								className='button2 btnLeft2'
								onClick={handleClickBackward2}
							>
								<img
									src={leftArrow}
									className={
										listeProjets.length > 5
											? ''
											: 'invisible'
									}
									alt='left arrow'
								/>
							</div>
							<div className='projectListContainer'>
								<div className='projectList' ref={projectsList}>
									{listeProjets.map((projet, index) => (
										<div
											className={
												index === currentProject
													? 'imageProject current'
													: 'imageProject'
											}
											onClick={() => displayInfo(index)}
											key={
												'imgProjet' +
												projet?.titre +
												index
											}
										>
											{afficherImage(projet)}
											<div className='projectName'>
												{projet.titre}
											</div>
										</div>
									))}
								</div>
							</div>

							<div
								className='button2 btnRight2'
								onClick={handleClickForward2}
							>
								<img
									src={rightArrow}
									className={
										listeProjets.length > 5
											? ''
											: 'invisible'
									}
									alt='right arrow'
								/>
							</div>
						</div>

						<div className='projectDisplay'>
							<div className='photoContainer'>
								<div className='photo'>
									<img
										src={
											'./images/sites/' +
											listeProjets[currentProject]
												?.titre +
											'.png'
										}
										alt={
											'./images/sites/' +
											listeProjets[currentProject]
												?.titre +
											'.png'
										}
									/>
								</div>
							</div>
							<div className='competences'>
								{listeProjets[currentProject]?.techno.map(
									(tech) => (
										<div
											className='techno'
											key={'techno ' + tech}
										>
											<img
												src={
													'./images/logos/' +
													tech +
													'.png'
												}
												alt={'logo ' + tech}
											/>
											<div>{tech}</div>
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
								<p className='title'>Lien vers le projet : </p>
								<p className='text'>
									<a
										href={listeProjets[currentProject]?.url}
										target='_blank'
										rel='noreferrer'
									>
										{listeProjets[currentProject]?.url}
									</a>
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
			url: projet.URL,
			texte: projet.Description,
			techno: projet.Technologies,
			type: projet.Type,
		})
	)
	return listeProjets
}

function afficherImage(projet) {
	return (
		<div className='projectMiniature'>
			<img
				src={'./images/sites/' + projet?.titre + '.png'}
				alt={'site ' + projet.titre}
			/>
		</div>
	)
}
