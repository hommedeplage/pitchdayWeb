import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class Contact extends Component {
	
	constructor(props) {
		super(props);
		this.subscribeUser = this.subscribeUser.bind(this);
	}
	
	subscribeUser = (input) => {
		
		try
		{
			
			fetch(`https://pitchday.io/api/newsletter`, {
				method: 'POST',
				body: JSON.stringify({ email: input.value })
			}).then(response => response.json())
				.then((data) => {
					this.input.value = data.debug;
					setTimeout(() => {
					this.input.value = '';
					}, 1000);
				});
		}
		catch (err)
		{
			console.log(err);
		}
	};
	
	render() {
		return (
			<section className="section contact-section" id="contact">
				<div className="section-label">Get In Touch</div>
				<div className="section-label-sibling">SUBSCRIBE FOR UPDATES</div>
				<div className="subscribe-form">
					<input ref={ref => this.input = ref} placeholder="Your email" name="email"/>
					<button onClick={() => this.subscribeUser(this.input)}
					        className="subscribe-button">Subscribe
					</button>
				</div>
			</section>
		);
	}
}