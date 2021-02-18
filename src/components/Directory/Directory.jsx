import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import PORTFOLIO_DATA from '../../assets/portfolio.data.js';

import './Directory.scss';

const Directory = () => {
	const [sections, setSections] = useState(PORTFOLIO_DATA);

	return (
		<div className='Directory'>
			{sections.map(({ id, imageUrl, title }) => (
				<MenuItem imageUrl={imageUrl} key={id} title={title} />
			))}
		</div>
	);
};

export default Directory;
