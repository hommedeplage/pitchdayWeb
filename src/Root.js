import React, { Component } from 'react';

import './styles/app.css';

import NavHeader from './components/Nav/NavHeader';
import Sections from './components/sections';
import Footer from './components/Footer';


class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="overlay-photo"/>
				<div className="container">
					<div className="row">
						<div className="wrapper md10 tablet12 sm12">
							<NavHeader/>
							<Sections/>
							<Footer/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
