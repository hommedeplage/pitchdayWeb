import React, { Component } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

export default class Allocation extends Component {
    render() {
        return (
            <section className="section allocation-section" id="allocation">
                <div className="section-label">Allocation</div>
                <Tabs className="allocation-tabs">
                    <TabList className="tab-headings inline">
                        <Tab className="tab-item" selectedClassName="active">
                            <span>Allocation</span>
                        </Tab>
                        <Tab className="tab-item" selectedClassName="active">
                            <span>PRE-CROWDSALE & CROWDSALE</span>
                        </Tab>
                        <Tab className="tab-item" selectedClassName="active">
                            <span>MINING REWARD</span>
                        </Tab>
                        <Tab className="tab-item" selectedClassName="active">
                            <span>USE OF CROWDSALE FUNDS</span>
                        </Tab>
                    </TabList>
                    <TabPanel
                        className="tab-content"
                        selectedClassName="active"
                    >
                        <div className="content c1">
                            <div className="allocation-photo">
                                <div className="chart-text c1">
                                    <span className="title">
                                        Un-Mined <code>(ecosystem)</code>
                                    </span>
                                    <span className="value">65%</span>
                                </div>
                                <div className="chart-text c2">
                                    <span className="title">
                                        Pre-Mined <code>(sales)</code>
                                    </span>
                                    <span className="value">35%</span>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel
                        className="tab-content"
                        selectedClassName="active"
                    >
                        <div className="content c2">
                            <div className="allocation-photo">
                                <div className="chart-text c1">
                                    <span className="title">
                                        Advisor / Investor
                                    </span>
                                    <span className="value">10%</span>
                                </div>
                                <div className="chart-text c2">
                                    <span className="title">Core</span>
                                    <span className="value">10%</span>
                                </div>
                                <div className="chart-text c3">
                                    <span className="title">Foundation</span>
                                    <span className="value">15%</span>
                                </div>
                                <div className="chart-text c4">
                                    <span className="title">Bounty</span>
                                    <span className="value">3%</span>
                                </div>
                                <div className="chart-text c5">
                                    <span className="title">Crowdsale</span>
                                    <span className="value">62%</span>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel
                        className="tab-content"
                        selectedClassName="active"
                    >
                        <div className="content c3">
                            <div className="allocation-photo">
                                <div className="chart-text c1">
                                    <span className="title">
                                        Team and community
                                    </span>
                                    <span className="value">32%</span>
                                </div>
                                <div className="chart-text c2">
                                    <span className="title">Founders</span>
                                    <span className="value">5%</span>
                                </div>
                                <div className="chart-text c3">
                                    <span className="title">Miners</span>
                                    <span className="value">63%</span>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel
                        className="tab-content"
                        selectedClassName="active"
                    >
                        <div className="content c4">
                            <div className="allocation-photo">
                                <div className="chart-text c1">
                                    <span className="title">Development</span>
                                    <span className="value">60%</span>
                                </div>
                                <div className="chart-text c2">
                                    <span className="title">Marketing</span>
                                    <span className="value">20%</span>
                                </div>
                                <div className="chart-text c3">
                                    <span className="title">Operations</span>
                                    <span className="value">10%</span>
                                </div>
                                <div className="chart-text c4">
                                    <span className="title">Foundation</span>
                                    <span className="value">5%</span>
                                </div>
                                <div className="chart-text c5">
                                    <span className="title">Legal</span>
                                    <span className="value">5%</span>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </section>
        );
    }
}
