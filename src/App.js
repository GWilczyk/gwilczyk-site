import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Projets from './pages/Projets/Projets';

import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/projets' component={Projets} />
				<Route exact path='/about' component={About} />
				<Route exact path='/contact' component={Contact} />
			</Switch>
		</div>
	);
}

export default App;
