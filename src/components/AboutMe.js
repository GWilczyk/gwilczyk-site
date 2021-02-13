import React from 'react';
import author from '../assets/Costume_blanc_422x422_72x72.jpg';

const AboutMe = () => {
	return (
		<div className='aboutMe-wrapper'>
			<div className='container py-5'>
				<div className='row'>
					<div className='col-lg-6 col-xm-12'>
						<div className='photo-wrap mb-5'>
							<img src={author} alt='Author' className='profile-img' />
						</div>
					</div>
					<div className='col-lg-6 col-xm-12'>
						<h1 className='aboutMe'>Développeur Full-Stack JavaScript</h1>
						<p>
							Je suis Gwendal Wilczyk, développeur web orienté JavaScript. Les
							technologies que j'utilise sont celles de la stack MERN (MongoDB,
							Express, React.js et Node.js).
						</p>
						<p>
							Je crée des sites internet «responsive», c'est-à-dire dont
							l'affichage s'adapte à la taille et la résolution des écrans des
							utilisateurs (du smartphone aux écrans extra-larges).
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
