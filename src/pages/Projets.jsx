import React, { useState } from 'react'

import CarteProjet from '../components/CarteProjet/CarteProjet'

import '../styles/projets.scss'

function Projets(props) {
	const [listeAffichage, setlisteAffichage] = useState([-1, 0, 1, 2, 3])

	const handleClickForward = () => {
		if (listeAffichage[3] < listeProjets.length - 1)
			setlisteAffichage([
				listeAffichage[0] + 1,
				listeAffichage[1] + 1,
				listeAffichage[2] + 1,
				listeAffichage[3] + 1,
				listeAffichage[4] + 1,
			])
		// console.log(listeAffichage)
	}
	const handleClickBackward = () => {
		if (listeAffichage[1] > 0)
			setlisteAffichage([
				listeAffichage[0] - 1,
				listeAffichage[1] - 1,
				listeAffichage[2] - 1,
				listeAffichage[3] - 1,
				listeAffichage[4] - 1,
			])
		// console.log(listeAffichage)
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

	return (
		<section id='projetsSection' className='section'>
			<div className='projets'>
				<h2>Projets</h2>
				<div className='cardContainer'>
					{listeAffichage[0] >= 0 ? (
						<CarteProjet
							imageURL={listeProjets[listeAffichage[0]].url}
							display={true}
							texte={listeProjets[listeAffichage[0]].texte}
						/>
					) : (
						<CarteProjet imageURL={''} display={false} texte={''} />
					)}

					<CarteProjet
						imageURL={listeProjets[listeAffichage[1]].url}
						display={true}
						texte={listeProjets[listeAffichage[1]].texte}
					/>

					<CarteProjet
						imageURL={listeProjets[listeAffichage[2]].url}
						display={true}
						texte={listeProjets[listeAffichage[2]].texte}
					/>

					<CarteProjet
						imageURL={listeProjets[listeAffichage[3]].url}
						display={true}
						texte={listeProjets[listeAffichage[3]].texte}
					/>

					{listeAffichage[4] < listeProjets.length ? (
						<CarteProjet
							imageURL={listeProjets[listeAffichage[4]].url}
							display={true}
							texte={listeProjets[listeAffichage[4]].texte}
						/>
					) : (
						<CarteProjet imageURL={''} display={false} texte={''} />
					)}
				</div>
			</div>
		</section>
	)
}

export default Projets
