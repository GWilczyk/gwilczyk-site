import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesCard = ({ icon, title, content }) => {
	return (
		<div className='box'>
			<div className='circle'>
				<FontAwesomeIcon className='icon' icon={icon} size='2x' />
			</div>
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
};

export default ServicesCard;
