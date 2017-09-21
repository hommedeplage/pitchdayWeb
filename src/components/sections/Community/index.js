import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class Community extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			userCount: 0,
			community: []
		};
		this.fetchUserCount = this.fetchUserCount.bind(this);
		this.fetchCommunityList = this.fetchCommunityList.bind(this);
	}
	
	componentDidMount() {
		this.fetchUserCount();
		this.fetchCommunityList();
	}
	
	fetchUserCount = () => {
		return fetch(`https://pitchday.io/api/bots/userCounts`)
			.then(response => response.json())
			.then(json => this.setState({
				userCount: json.data.telegramCount
			}))
			.catch((error) => {
				console.log(error);
			});
	};
	
	
	fetchCommunityList = () => {
		return fetch(`https://pitchday.io/api/contributors`)
			.then(response => response.json())
			.then(json => this.setState({community: json.data}))
			.catch(er => {
				console.log(er);
			});
	};
	
	
	render() {
		
		const contributors = ({Id, Name, Link, Description}) => {
			if(Link)
			{
				return (
					<a key={Id} className="contributor link" href={Link} target="_blank"
					   rel="noopener noreferrer">{Name} ({Description}), </a>
				);
			}
			else
			{
				return (<span className="contributor" key={Id}>{Name}, </span>);
			}
		};
		
		return (
			<section className="section community-section" id="community">
				<div className="section-label">Community</div>
				<span className="section-label-sibling">WE ARE {this.state.userCount} AND STILL GROWING</span>
				<div className="community-list-block">
					{this.state.community.map(contributors)}
				</div>
				<a href="https://t.me/pitchday_bot" rel="noopener noreferrer"  target="_blank" className="jumbotron-button">
					<i className="telegram-icon"/>
					<span>Join Today</span>
				</a>
			</section>
		);
	}
}