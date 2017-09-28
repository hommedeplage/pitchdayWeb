import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Contributors from './Contributors';

export default class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            community: [],
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
        return (
            <section className="section community-section" id="community">
                <div className="section-label">Team & Community</div>
                <span className="section-label-sibling">
                    WE ARE {this.state.community.length} AND STILL GROWING
                </span>
                <Contributors contributors={this.state.community} />
                <a
                    href="https://t.me/pitchday_bot"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="jumbotron-button"
                >
                    <i className="telegram-icon" />
                    <span>Join now</span>
                </a>
            </section>
        );
    }
}
