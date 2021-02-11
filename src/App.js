import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Particles from 'react-particles-js';

import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
	return (
		<>
			<Particles
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
			/>
			<Navbar />
			<Header />
			<AboutMe />
			<Services />
			<Experience />
		</>
	);
}

export default App;
