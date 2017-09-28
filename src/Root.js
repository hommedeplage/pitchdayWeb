import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import { addTranslationForLanguage, setActiveLanguage } from 'react-localize-redux';
import * as utils from './utils';

import './styles/app.css';

import NavHeader from './components/Nav';
import Sections from './components/sections';
import Footer from './components/Footer';

const defaultLang = utils.getLanguage(store);

store.dispatch(setActiveLanguage(defaultLang));
store.dispatch(addTranslationForLanguage(utils.getTranslation(defaultLang), defaultLang));

class Root extends Component {
	
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<div className="container">
						<div className="overlay-photo">
							{/*<span className="label">Backers</span>*/}
							{/*<span className="label">Projects</span>*/}
							{/*<span className="label">Smart Contracts</span>*/}
						</div>
						<div className="row">
							<div className="wrapper md10 tablet12 sm12">
								<NavHeader/>
								<Sections/>
								<Footer/>
							</div>
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}

export default Root;
