import React, { Component } from 'react';

export default class HowItWorks extends Component {
	render() {
		return (
			<section className="section how-it-works-section" id="how-it-works">
				<div className="section-label">How It Works</div>
				<span className="section-label-sibling">System technical consideration</span>
				<p className="how-it-works-description">
					The economy is built upon its community in multiple market categories using the
					platform to conduct fast, secure and disintermediary transactions. The community
					is made up of individuals and entities that collaborate and pitch their future
					ideas, projects or growing businesses to each other. The community also includes
					decentralized infrastructure providers to maintain the blockchain.
				</p>
				<div className="workers-types">
					<div className="worker">
						<span className="worker-type">
							<i className="worker-type-icon"/>
							<span className="worker-type-title">Collaborators</span>
						</span>
						<p className="worker-description">
							Participants earn PDT for joining the platform, connecting to <br/> projects,
							pitching ideas, forming teams and gaining backers.
						</p>
					</div>
					<div className="worker right">
						<span className="worker-type">
							<i className="worker-type-icon"/>
							<span className="worker-type-title">NODES (MINERS)</span>
						</span>
						<p className="worker-description">
							Participants earn PDT for joining the platform, connecting to <br/> projects,
							pitching ideas, forming teams and gaining backers.
						</p>
					</div>
					<div className="worker">
						<span className="worker-type">
							<i className="worker-type-icon"/>
							<span className="worker-type-title">BACKERS</span>
						</span>
						<p className="worker-description">
							Use PDT to support ideas and projects.
						</p>
					</div>
					<div className="worker right">
						<span className="worker-type">
							<i className="worker-type-icon"/>
							<span className="worker-type-title">PDT TOKEN HOLDERS</span>
						</span>
						<p className="worker-description">
							Govern the network and provide the fuel for enabling transactions.
						</p>
					</div>
				</div>
				<a href="https://t.me/pitchday" rel="noopener noreferrer"  target="_blank" className="jumbotron-button">
					<i className="telegram-icon"/>
					<span>Join Today</span>
				</a>
			</section>
		);
	}
}