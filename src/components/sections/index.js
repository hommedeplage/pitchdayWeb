import React, { Component } from 'react';

import Home from './Home/';
import HowItWorks from './HowItWorks';
import Allocation from './Allocation';
import Community from './Community';
import Contact from './Contact';

import './section.css';

export default class Sections extends Component {
    render() {
        return (
            <main>
                <Home />
                <HowItWorks />
                <Allocation />
                <Community />
                <Contact />
            </main>
        );
    }
}
