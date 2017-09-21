import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class Home extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			news: []
		};
		this.fetchNews = this.fetchNews.bind(this);
	}
	
	componentDidMount() {
		this.fetchNews();
	}
	
	fetchNews = () => {
		return fetch(`https://pitchday.io/api/announcements`)
			.then(response => response.json())
			.then(json => this.setState({ news: json.data[0] }))
			.catch(er => {
				console.log(er);
			});
	};
	
	render() {
		return (
			<section className="section home-section">
				<div className="fresh-news-badge">
					<span className="badge">News</span>
					<span className="news-title">
						{this.state.news.Body}
					</span>
				</div>
				<div className="jumbotron-block">
					<h2 className="jumbotron-heading">Unlock innovation by removing collaboration barriers</h2>
					<p className="jumbotron-paragraph">
						Collaboration platform powered by community-generated smart contracts for entrepreneurs, backers and creative individuals.
					</p>
					<a href="https://t.me/pitchday_bot" rel="noopener noreferrer" target="_blank"
					   className="jumbotron-button">
						<i className="telegram-icon"/>
						<span>Join Today</span>
					</a>
				</div>
			</section>
		);
	}
}