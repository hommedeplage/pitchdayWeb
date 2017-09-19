import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<section className="section home-section">
				<div className="fresh-news-badge">
					<span className="badge">News</span>
					<span className="news-title">Here you will be able to see latest
						breaking news about Pitchday! Stay tuned for more…</span>
				</div>
				<div className="jumbotron-block">
					<h2 className="jumbotron-heading">Collaborative creation reborns</h2>
					<p className="jumbotron-paragraph">
						The Pitchday is a network which allows anyone to collaborate, support and
						contribute to other participants securely in a decentralized way.
					</p>
					<a href="https://t.me/pitchday" rel="noopener noreferrer"  target="_blank" className="jumbotron-button">
						<i className="telegram-icon"/>
						<span>Join Today</span>
					</a>
				</div>
			</section>
		);
	}
}