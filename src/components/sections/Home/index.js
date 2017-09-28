import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import * as utils from '../../../utils';

export default class Home extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			news: []
		};
		this.fetchNews = this.fetchNews.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount() {
		this.fetchNews();
	}
	
	handleClick = (id) => {
		utils.smoothScroll.scrollTo(id);
	};
	
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
					<h2 className="jumbotron-heading">Unlock innovation <br /> removing collaboration
						barriers</h2>
					<p className="jumbotron-paragraph">
						Blockchain collaboration social network
					</p>
				</div>
				<button onClick={() => this.handleClick('community')} className="learn-more-btn">
					<span>Pitchday Network</span>
					<i className="arrow-icon"/>
				</button>
			</section>
		);
	}
}