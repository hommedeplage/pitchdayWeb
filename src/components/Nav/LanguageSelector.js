import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveLanguage, addTranslationForLanguage } from 'react-localize-redux';
import * as utils from '../../utils';

class LanguageSelector extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.handleLanguageChange = this.handleLanguageChange.bind(this);
		this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
	}
	
	handleLanguageChange(code) {
		const { dispatch } = this.props;
		this.setState({ open: !this.state.open });
		localStorage.setItem('defaultLocale',code);
		dispatch(setActiveLanguage(code));
	}
	
	handleOpenDropdown() {
		this.setState({ open: !this.state.open })
	}
	
	componentDidUpdate(prevProps) {
		
		if (this.props.active.code !== prevProps.active.code)
		{
			const { dispatch, active } = this.props;
			dispatch(addTranslationForLanguage(utils.getTranslation(active.code), active.code));
		}
	}
	
	render() {
		const { languages, active } = this.props;
		return (
			<div className="dropdown-block">
				<span className="dropdown-btn"
				      onClick={this.handleOpenDropdown}>
					<span className="value">{active.name}</span>
					<i className="icon chevron"/>
				</span>
				<ul className={(this.state.open) ? 'open' : ''}>
					{languages.map((language) =>
						<li key={language.code}
						    onClick={() => this.handleLanguageChange(language.code)}>
							<span>{language.name}</span></li>
					)}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		languages: state.locale.languages.filter(l => l.active !== true),
		active: state.locale.languages.find(l => l.active === true)
	}
};

export default connect(mapStateToProps)(LanguageSelector);
