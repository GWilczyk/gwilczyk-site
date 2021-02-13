import React from 'react';
import Typed from 'react-typed';

const Header = () => {
	return (
		<div className='header-wrapper'>
			<div className='main-info'>
				<h1 className='pb-5'>Gwendal Wilczyk</h1>
				<Typed
					className='typed-text'
					strings={[
						'Développement web',
						'Web Design',
						'Référencement naturel SEO',
						'Facebook Ads',
						'Google Ads',
					]}
					typeSpeed={100}
					backSpeed={50}
					loop
				/>
				<a href='/' className='btn-main-offer'>
					Contactez-moi
				</a>
			</div>
		</div>
	);
};

export default Header;
