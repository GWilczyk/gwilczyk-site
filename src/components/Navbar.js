import React from 'react';
import logo from '../assets/LOGO_GWILCZYK_DARK.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg fixed-top'>
			<div className='container'>
				<a className='navbar-brand' href='/'>
					<img src={logo} alt='Logo' className='logo' />
				</a>

				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<a className='nav-link px-3' href='/'>
								Services
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link px-3' href='/'>
								Portfolio
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link px-3' href='/'>
								À propos
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link px-3' href='/'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
