import React, { Component } from 'react';
import * as util from '../../utils/';
import LanguageSelector from './LanguageSelector';

export default class MenuList extends Component {
	
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick = (id) => {
		util.smoothScroll.scrollTo(id);
	};
	
	render() {
		return (
			<ul className="main-nav align-right inline">
				<li>
					<a onClick={() => {
						this.handleClick('how-it-works')
					}}>
						How It works</a>
				</li>
				<li>
					<a href="https://github.com/pitchday/white-paper"
						target="_blank"
                       rel="noopener noreferrer">
						WhitePaper</a>
				</li>
				<li>
					<a onClick={() => {
						this.handleClick('allocation')
					}}>
						Allocation</a>
				</li>
				<li>
					<a onClick={() => {
						this.handleClick('community')
					}}>
						Team & Community</a>
				</li>
				<li>
					<a onClick={() => {
						this.handleClick('contact')
					}}>
						Get in Touch</a>
				</li>
				<li className="button-item">
					<a href="https://t.me/pitchday_bot" rel="noopener noreferrer" target="_blank"
					   className="jumbotron-button">
						<span>JOIN NOW</span>
					</a>
				</li>
				<li className="selector-item">
					<LanguageSelector/>
				</li>
			</ul>
		);
	}
}
