import React, { Fragment } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import avatar1 from '../assets/testimonials-images/images/avatars/avatar-1.png';
import avatar2 from '../assets/testimonials-images/images/avatars/avatar-2.png';

const TestimonialsCarousel = () => {
	return (
		<Carousel
			showArrows={true}
			infiniteLoop={true}
			showThumbs={false}
			showStatus={false}
			autoPlay={true}
			interval={4000}
		>
			<Fragment>
				<img src={avatar1} alt='John Doe' />
				<div className='myCarousel'>
					<h3>John Doe</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
						magnam explicabo beatae distinctio! Officiis aperiam possimus
						perspiciatis perferendis iusto facere!
					</p>
				</div>
			</Fragment>
			<Fragment>
				<img src={avatar2} alt='Jane Doe' />
				<div className='myCarousel'>
					<h3>Jane Doe</h3>
					<p>Hé, doucement ! N'poussez pas derrière !</p>
					<p>'y en aura pour tout le monde !</p>
				</div>
			</Fragment>
		</Carousel>
	);
};

export default TestimonialsCarousel;
