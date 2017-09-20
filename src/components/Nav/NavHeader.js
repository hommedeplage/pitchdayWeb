import React, { Component } from 'react';
import './nav-header.css';

import Logo from './Logo';
import MenuList from './MenuList';

export default class NavHeader extends Component {
	render() {
		return (
			<nav id="home">
				<Logo/>
				<MenuList/>
			</nav>
		);
	}
}