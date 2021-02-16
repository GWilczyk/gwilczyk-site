import React from 'react';

const Contacts = () => {
	return (
		<div className='contacts'>
			<div className='text-center'>
				<h1>Me contacter</h1>
				<p>Vous voulez me poser une question ou me décrire votre projet ?</p>
				<p>
					Vous pouvez me joindre par téléphone ou en remplissant le formulaire
					ci-contre.
				</p>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 col-xs-12'>
						<div className='text-center'>
							<input
								className='form-control'
								id='name'
								name='name'
								placeholder='Prénom et nom'
								type='text'
							/>
							<div className='line' />
						</div>

						<div className='text-center'>
							<input
								className='form-control'
								id='phone'
								name='phone'
								placeholder='Téléphone'
								type='tel'
							/>
							<div className='line' />
						</div>

						<div className='text-center'>
							<input
								className='form-control'
								id='email'
								name='email'
								placeholder='Email'
								type='email'
							/>
						</div>
					</div>
					<div className='col-md-6 col-xs-12'>
						<div className='text-center'>
							<input
								className='form-control'
								id='title'
								name='title'
								placeholder='Titre du message'
								type='text'
							/>
						</div>

						<div className='text-center'>
							<textarea
								className='form-control'
								id='message'
								name='message'
								placeholder='Message'
								type='text'
							/>
						</div>

						<button className='contact-btn' type='submit'>
							Envoi
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
