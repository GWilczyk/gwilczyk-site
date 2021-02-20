import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/projects' component={ProjectsPage} />
				<Route exact path='/about' component={AboutPage} />
				<Route exact path='/contact' component={ContactPage} />
			</Switch>
		</div>
	);
}

export default App;
