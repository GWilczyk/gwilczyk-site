import 'react-popupbox/dist/react-popupbox.css';

import React from 'react';
import { PopupboxContainer, PopupboxManager } from 'react-popupbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import proshop from '../assets/portfolio-images/proshop.png';
import smartBrain from '../assets/portfolio-images/smart-brain.png';
import emaily from '../assets/portfolio-images/emaily.png';
import cryptodash from '../assets/portfolio-images/cryptodash.png';

const Portfolio = () => {
	const openPopupboxProshop = () => {
		const content = (
			<React.Fragment>
				<img
					className='portfolio-image-popupbox'
					src={proshop}
					alt='E-Commerce Application'
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
					voluptatibus voluptates! Assumenda beatae pariatur rerum recusandae
					vel consectetur tempora nulla?
				</p>
				<b>Demo:</b>{' '}
				<button
					className='hyper-link'
					onClick={() => window.open('https://proshop-gwendev.herokuapp.com')}
				>
					https://proshop-gwendev.herokuapp.com
				</button>
			</React.Fragment>
		);

		PopupboxManager.open({ content });
	};

	const popupboxConfigProshop = {
		titleBar: {
			enable: true,
			text: 'Proshop E-Commerce Application',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	const openPopupboxSmartBrain = () => {
		const content = (
			<React.Fragment>
				<img
					className='portfolio-image-popupbox'
					src={smartBrain}
					alt='Face Recognition Application'
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
					voluptatibus voluptates! Assumenda beatae pariatur rerum recusandae
					vel consectetur tempora nulla?
				</p>
				<b>Demo:</b>{' '}
				<button
					className='hyper-link'
					onClick={() =>
						window.open('https://smart-brain-gwendev.herokuapp.com')
					}
				>
					https://smart-brain-gwendev.herokuapp.com
				</button>
			</React.Fragment>
		);

		PopupboxManager.open({ content });
	};

	const popupboxConfigSmartBrain = {
		titleBar: {
			enable: true,
			text: 'Face Recognition Application',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	const openPopupboxEmaily = () => {
		const content = (
			<React.Fragment>
				<img
					className='portfolio-image-popupbox'
					src={emaily}
					alt='Large Feedback-Collection Application'
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
					voluptatibus voluptates! Assumenda beatae pariatur rerum recusandae
					vel consectetur tempora nulla?
				</p>
				<b>Demo:</b>{' '}
				<button
					className='hyper-link'
					onClick={() =>
						window.open('https://protected-ridge-27174.herokuapp.com')
					}
				>
					https://protected-ridge-27174.herokuapp.com
				</button>
			</React.Fragment>
		);

		PopupboxManager.open({ content });
	};

	const popupboxConfigEmaily = {
		titleBar: {
			enable: true,
			text: 'Large Feedback-Collection Application',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	const openPopupboxCryptoDash = () => {
		const content = (
			<React.Fragment>
				<img
					className='portfolio-image-popupbox'
					src={cryptodash}
					alt='Crypto-Currency Visualisation Application'
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
					voluptatibus voluptates! Assumenda beatae pariatur rerum recusandae
					vel consectetur tempora nulla?
				</p>
				<b>Demo:</b>{' '}
				<button
					className='hyper-link'
					onClick={() => window.open('https://gwilczyk.github.io/CRYPTODASH/')}
				>
					https://gwilczyk.github.io/CRYPTODASH/
				</button>
			</React.Fragment>
		);

		PopupboxManager.open({ content });
	};

	const popupboxConfigCryptoDash = {
		titleBar: {
			enable: true,
			text: 'Crypto-Currency Visualisation Application',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	return (
		<div className='portfolio-wrapper'>
			<div className='container'>
				<h1 className='text-uppercase text-center py-5'>Portfolio</h1>
				<div className='image-box-wrapper row justify-content-center'>
					<div className='portfolio-image-box' onClick={openPopupboxProshop}>
						<img
							src={proshop}
							alt='E-Commerce Application'
							className='portfolio-image'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon icon={faSearchPlus} className='portfolio-icon' />
					</div>
					<PopupboxContainer {...popupboxConfigProshop} />

					<div className='portfolio-image-box' onClick={openPopupboxSmartBrain}>
						<img
							src={smartBrain}
							alt='Face recognition application'
							className='portfolio-image'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon icon={faSearchPlus} className='portfolio-icon' />
					</div>
					<PopupboxContainer {...popupboxConfigSmartBrain} />

					<div className='portfolio-image-box' onClick={openPopupboxEmaily}>
						<img
							src={emaily}
							alt='Large Feedback-Collection Application'
							className='portfolio-image'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon icon={faSearchPlus} className='portfolio-icon' />
					</div>
					<PopupboxContainer {...popupboxConfigEmaily} />

					<div className='portfolio-image-box' onClick={openPopupboxCryptoDash}>
						<img
							src={cryptodash}
							alt='Crypto-currency Dashboard'
							className='portfolio-image'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon icon={faSearchPlus} className='portfolio-icon' />
					</div>
					<PopupboxContainer {...popupboxConfigCryptoDash} />
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
