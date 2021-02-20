import React from 'react';
import { Link } from 'react-router-dom';

// import LOGO from '../../assets/GW_light-120x120.png';

// <Link to='/' className='LogoContainer'>
// 	<img src={LOGO} alt='logo' className='Logo' />
// </Link>

import { ReactComponent as LOGO } from '../../assets/GW_light-120x120.svg';
import './Header.scss';

const Header = () => {
	return (
		<div className='Header'>
			<Link to='/' className='LogoContainer'>
				<LOGO className='Logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/'>
					Accueil
				</Link>
				<Link className='option' to='/projects'>
					Projets
				</Link>
				<Link className='option' to='/'>
					À propos
				</Link>
				<Link className='option' to='/contact'>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default Header;
