// import React from 'react'

import '../styles/contact.scss'
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
// import './contact.scss'

// import useOnScreen from '../../hooks/useOnScreen'
// import { useContext } from 'react'
// import { NavigationContext } from '../../context/context'

function Contact(props) {
	// let success = false
	// let fail = false
	const [success, setSuccess] = useState(false)
	const [fail, setFail] = useState(false)
	//send e mail
	const sendEmail = (e) => {
		e.preventDefault()
		console.log(form)
		emailjs
			.sendForm('service_9intz6x', 'template_etlfva5', form.current, {
				publicKey: '22blyaDc5w6TQyX7i',
			})
			.then(
				() => {
					console.log('SUCCESS!')
					setSuccess(true)
					setFail(false)
				},
				(error) => {
					console.log('FAILED...', error.text)
					setSuccess(false)
					setFail(true)
				}
			)
	}
	const contact = useRef()
	const form = useRef()
	//test if Contact is visible
	// const isVisible = useOnScreen(form)
	// const { setVisibility } = useContext(NavigationContext)

	// useEffect(() => {
	// 	if (isVisible) setVisibility('Contact', true)
	// 	else setVisibility('Contact', false)
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [isVisible])
	useEffect(() => {}, [success, fail])
	return (
		// <section id='contactSection' className='lastSection'>
		// 	// 	<div className='contact'>
		// // 		<h2>Contact</h2>
		// // 		<div className='contactForm'>
		// // 			<label for='yourName'>Votre Nom</label>
		// // 			<input type='text' name='yourName' />
		// // 			<label for='yourEMail'>Votre E-Mail</label>
		// // 			<input type='text' name='yourEMail' />
		// // 			<label for='objet'>Objet du message</label>
		// // 			<input type='text' name='objet' />
		// // 			<label for='message'>Message</label>
		// // 			<textarea name='message' />
		// // 		</div>
		// // 		<span />
		// // 	</div>
		// // </section>
		<section id='contactSection' ref={contact} className='lastSection'>
			<h2>CONTACT</h2>
			<div className='contact'>
				<form onSubmit={sendEmail} ref={form}>
					<div className='nameMail'>
						<div className='smallInput'>
							<label>Nom</label>
							<input type='text' name='from_name' />
						</div>

						<div className='smallInput'>
							<label>E-mail</label>
							<input type='email' name='user_email' />
						</div>
					</div>
					<div>
						<label>Message</label>
						<textarea name='message' />
					</div>
					<input
						type='submit'
						value='Envoyer'
						className={success ? 'invisible' : ''}
					/>
					<div className='mailStatus'>
						<p className={success ? 'success' : 'invisible'}>
							message envoyé avec succès
						</p>
						<p className={fail ? 'fail' : 'invisible'}>
							échec de l'envoie du message
						</p>
					</div>
				</form>
			</div>
			<span className='placeHolder' />
		</section>
	)
}

export default Contact
