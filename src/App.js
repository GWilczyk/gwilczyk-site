import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import Particles from 'react-particles-js';

import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
	return (
		<>
			{/*	<Particles
				className='particles-canvas'
				params={{
					particles: {
						number: {
							value: 120,
							density: {
								enable: true,
							},
						},
						size: {
							value: 0,
						},
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: 'repulse',
							},
						},
					},
				}}
			/>*/}
			<Navbar />
			<Header />
			<Services />
			<Portfolio />
			<AboutMe />
			<Testimonials />
		</>
	);
}

export default App;
