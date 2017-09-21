import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class Community extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			community: []
		};
		this.fetchCommunityList = this.fetchCommunityList.bind(this);
	}
	
	componentDidMount() {
		this.fetchCommunityList();
	}
	
	fetchCommunityList = () => {
		return fetch(`https://pitchday.io/api/contributors`)
			.then(response => response.json())
			.then(json => this.setState({ community: json.data }))
			.catch(er => {
				console.log(er);
			});
	};
	
	render() {
		const contributors = ({ Id, Name, Link, Description}, index) => {
			if (Link)
			{
				return (
					<a key={Id} className="contributor link"
					   href={Link} target="_blank"
					   rel="noopener noreferrer">{(Name.trim())} ({Description})
						{(index + 1 === this.state.community.length) ? '' : ','}</a>
				);
			}
			else
			{
				return (<span className="contributor" key={Id}>{Name.trim()}
					{(index + 1 === this.state.community.length) ? '' : ','}</span>);
			}
		};
		
		return (
			<section className="section community-section" id="community">
				<div className="section-label">Community</div>
				<span className="section-label-sibling">
					WE ARE {this.state.community.length} AND STILL GROWING</span>
				<div className="community-list-block">
					{this.state.community.map((user, index) => contributors(user, index))}
				</div>
				<a href="https://t.me/pitchday_bot" rel="noopener noreferrer"  target="_blank" className="jumbotron-button">
				<a href="https://t.me/pitchday" rel="noopener noreferrer"
				   target="_blank" className="jumbotron-button">
					<i className="telegram-icon"/>
					<span>Join Today</span>
				</a>
			</section>
		);
	}
}