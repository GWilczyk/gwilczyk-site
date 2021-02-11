import React from 'react';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import ServicesCard from './ServicesCard';

const Services = () => {
	return (
		<div className='services'>
			<h1 className='py-5'>Mes services</h1>
			<div className='container'>
				<div className='row'>
					<ServicesCard
						icon={faDesktop}
						title='Web Design'
						content='Une approche individualisée de chaque projet and always focus on the
					result.'
					/>
					<ServicesCard
						icon={faFileCode}
						title='Développement web'
						content='Construisez votre site internet grâce aux meilleures
								technologies.'
					/>
					<ServicesCard
						icon={faFacebookF}
						title='Facebook Ads Social Media Marketing'
						content='Présentez vos services ou vos produits aux utilisateurs de Facebook.'
					/>
					<ServicesCard
						icon={faGoogle}
						title='Google Ads'
						content='Vous voulez que vos produits apparaissent en tête des recherches Google ?'
					/>
				</div>
			</div>
		</div>
	);
};

export default Services;
