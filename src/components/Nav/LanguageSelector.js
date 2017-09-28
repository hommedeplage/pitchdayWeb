import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
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
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}
	
	componentWillMount() {
		document.addEventListener('click', this.handleClickOutside, false);
	}
	
	componentDidUpdate(prevProps) {
		
		if (this.props.active.code !== prevProps.active.code)
		{
			const { dispatch, active } = this.props;
			dispatch(addTranslationForLanguage(utils.getTranslation(active.code), active.code));
		}
	}
	
	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, false);
	}
	
	handleClickOutside(e) {
		if (!findDOMNode(this.dropdown).contains(e.target))
		{
			this.setState(state => ({ ...state, open: false }))
		}
	};
	
	handleLanguageChange(code) {
		const { dispatch } = this.props;
		this.setState(state => ({ ...state, open: !state.open }));
		
		localStorage.setItem('defaultLocale', code);
		dispatch(setActiveLanguage(code));
	}
	
	handleOpenDropdown() {
		this.setState(state => ({ ...state, open: !state.open }));
	}
	
	render() {
		const { languages, active } = this.props;
		
		const languagesList = ({ name, code }) => {
			return (
				<li key={code} onClick={() =>
					this.handleLanguageChange(code)
				}>
					<span>{name}</span>
				</li>
			);
		};
		
		return (
			<div className="dropdown-block">
				<span className="dropdown-btn"
				      ref={node => this.dropdown = node}
				      onClick={this.handleOpenDropdown}>
					<span className="value">{active.name}</span>
					<i className="icon chevron"/>
				</span>
				<ul className={(this.state.open) ? 'open' : ''}>
					{languages.map((language) => languagesList(language))}
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
