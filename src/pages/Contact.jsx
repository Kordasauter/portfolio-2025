import React from 'react'

import '../styles/contact.scss'

function Contact(props) {
	return (
		<section id='contactSection' className='lastSection'>
			<div className='contact'>
				<h2>Contact</h2>
				<div className='contactForm'>
					<label for='yourName'>Votre Nom</label>
					<input type='text' name='yourName' />
					<label for='yourEMail'>Votre E-Mail</label>
					<input type='text' name='yourEMail' />
					<label for='objet'>Objet du message</label>
					<input type='text' name='objet' />
					<label for='message'>Message</label>
					<textarea name='message' />
				</div>
				<span />
			</div>
		</section>
	)
}

export default Contact
