import '../styles/contact.scss'
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact(props) {
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
	useEffect(() => {}, [success, fail])
	return (
		<section id='contactSection' ref={contact} className='lastSection'>
			<h2>CONTACT</h2>
			<div className='contact'>
				<form onSubmit={sendEmail} ref={form}>
					<div className='nameMail'>
						<div className='smallInput'>
							<label for='from_name'>Nom</label>
							<input
								type='text'
								name='from_name'
								id='from_name'
							/>
						</div>

						<div className='smallInput'>
							<label for='user_email'>E-mail</label>
							<input
								type='email'
								name='user_email'
								id='user_email'
							/>
						</div>
					</div>
					<div>
						<label for='message'>Message</label>
						<textarea name='message' id='message' />
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
