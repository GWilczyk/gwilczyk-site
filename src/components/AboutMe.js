import React from 'react';
import author from '../assets/Costume_blanc.jpg';

const AboutMe = () => {
	return (
		<div className='container py-5'>
			<div className='row'>
				<div className='col-lg-6 col-xm-12'>
					<div className='photo-wrap mb-5'>
						<img src={author} alt='Author' className='profile-img' />
					</div>
				</div>
				<div className='col-lg-6 col-xm-12'>
					<h1 className='aboutMe-heading'>Développeur Full-Stack JavaScript</h1>
					<p>
						Je suis Gwendal Wilczyk, développeur web orienté JavaScript. Les
						technologies que j'utilise sont celles de la stack MERN (MongoDB,
						Express, React.js et Node.js).
					</p>
					<p>
						Je crée des sites internet «responsive», c'est-à-dire dont
						l'affichage s'adapte à la taille de l'écran de vos utilisateurs,
						depuis celui des smartphones jusqu'aux extra-larges des ordinateurs
						de bureau.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
