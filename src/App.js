import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Particles from 'react-particles-js';

import Header from './components/Header';
import Navbar from './components/Navbar';

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
		</>
	);
}

export default App;
