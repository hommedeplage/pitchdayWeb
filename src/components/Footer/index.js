import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<a className="support-email" href="mailto:hi@pitchday.io">
					hi@pitchday.io</a>
				<div className="social-links">
					<a href="https://github.com/pitchday"
					   rel="noopener noreferrer"  target="_blank">
						<i className="icon github-icon"/>
					</a>
					<a href="https://t.me/pitchday_bot"
					   rel="noopener noreferrer"  target="_blank">
						<i className="icon telegram-icon"/>
					</a>
				</div>
			</footer>
		);
	}
}