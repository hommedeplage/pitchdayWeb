import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import * as utils from '../../../utils';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.subscribeUser = this.subscribeUser.bind(this);
        this.state = {
            errorMsg: '',
        };
    }

    subscribeUser = input => {
        if (!utils.ValidateNewsletter(input.value)) {
            this.setState(state => ({
                ...state,
                errorMsg: 'Please enter a valid email',
            }));
        } else {
            try {
                fetch(`https://pitchday.io/api/newsletter`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: input.value,
                    }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            this.input.value = data.message;
                            this.setState({
                                errorMsg: '',
                            });
                            setTimeout(() => {
                                this.input.value = '';
                            }, 1500);
                        } else {
                            this.setState({
                                errorMsg: data.debug,
                            });
                            this.input.value = '';
                        }
                    });
            } catch (err) {
                console.log(err);
            }
        }
    };

    render() {
        return (
            <section className="section contact-section" id="contact">
                <div className="section-label">Get In Touch</div>
                <div className="section-label-sibling">
                    Subscribe for token sale announcements and updates
                </div>
                <div className="subscribe-form">
                    {this.state.errorMsg !== '' ? (
                        <span className="error-label">
                            {this.state.errorMsg}
                        </span>
                    ) : (
                        ''
                    )}
                    <input
                        ref={ref => (this.input = ref)}
                        placeholder="Your email"
                        name="email"
                    />
                    <button
                        onClick={() => this.subscribeUser(this.input)}
                        className="subscribe-button"
                    >
                        Subscribe
                    </button>
                </div>
            </section>
        );
    }
}
