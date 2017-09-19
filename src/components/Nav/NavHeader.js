import React, { Component } from 'react';
import Logo from './Logo';
import './nav-header.css';
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