import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ imageUrl, title }) => {
	return (
		<div className='MenuItem'>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>…sous-titre…</span>
			</div>
		</div>
	);
};

export default MenuItem;
