import React, { Fragment } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import avatar1 from '../assets/testimonials-images/images/avatars/avatar-1.png';
import avatar2 from '../assets/testimonials-images/images/avatars/avatar-2.png';
import avatar3 from '../assets/testimonials-images/images/avatars/avatar-3.png';
import avatar4 from '../assets/testimonials-images/images/avatars/avatar-4.png';

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
				<img src={avatar1} alt='John Doe 1' />
				<div className='myCarousel'>
					<h3>John Doe 1</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
						magnam explicabo beatae distinctio! Officiis aperiam possimus
						perspiciatis perferendis iusto facere!
					</p>
				</div>
			</Fragment>
			<Fragment>
				<img src={avatar2} alt='John Doe 2' />
				<div className='myCarousel'>
					<h3>John Doe 2</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
						magnam explicabo beatae distinctio! Officiis aperiam possimus
						perspiciatis perferendis iusto facere!
					</p>
				</div>
			</Fragment>
			<Fragment>
				<img src={avatar3} alt='John Doe 3' />
				<div className='myCarousel'>
					<h3>John Doe 3</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
						magnam explicabo beatae distinctio! Officiis aperiam possimus
						perspiciatis perferendis iusto facere!
					</p>
				</div>
			</Fragment>
			<Fragment>
				<img src={avatar4} alt='John Doe 4' />
				<div className='myCarousel'>
					<h3>John Doe 4</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
						magnam explicabo beatae distinctio! Officiis aperiam possimus
						perspiciatis perferendis iusto facere!
					</p>
				</div>
			</Fragment>
		</Carousel>
	);
};

export default TestimonialsCarousel;