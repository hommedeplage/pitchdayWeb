import React, { Component } from 'react';
import * as utils from '../../../utils';

const ContributorUser = ({ Name, Description, Link, AvatarUrl }) => {
    return (
        <div className="contributor">
            <span
                className="blur"
                style={{ backgroundImage: `url(${AvatarUrl})` }}
            />
            <div
                style={{ backgroundImage: `url(${AvatarUrl})` }}
                className={AvatarUrl === '' ? 'empty' : ''}
                id={AvatarUrl === '' ? 'empty' : ''}
                data-name={Name}
            />
            <span className="name">{Name}</span>
            <span className="role">{Description}</span>
            <a href={Link} rel="noopener noreferrer" target="_blank">
                <i className="linkedin-icon" />
            </a>
        </div>
    );
};

// const SimpleUser = ({ Name, now, created }) => {
// 	return (
// 		<div className="member"
// 		     data-type={(parseFloat(now) - parseFloat(created) < 864000 * 1000)
// 			     ? 1 : (parseFloat(now) - parseFloat(created) < 1296000 * 1000) ?
// 				     2 : 3}>
// 			<span className="tooltip" data-name={Name}/>
// 		</div>
// 	)
// };

class Contributors extends Component {
    componentDidUpdate() {
        utils.getInitials(document.getElementsByClassName('empty'));
    }

    render() {
        const { contributors } = this.props;

        const contrib = contributors.filter(
            c => c.Description === 'contributor',
        );
        //const user = contributors.filter(u => u.Description !== 'contributor');

        return (
            <div className="community-list-block">
                {contrib.map(c => (
                    <ContributorUser
                        key={c.Id}
                        Name={c.Name}
                        Description={c.Description}
                        Link={c.Link}
                        AvatarUrl={c.AvatarUrl}
                    />
                ))}
                {/*{user.map(u =>*/}
                {/*<SimpleUser*/}
                {/*key={u.Id}*/}
                {/*created={new Date(u.CreatedAt).getTime()}*/}
                {/*now={new Date().getTime()}*/}
                {/*Name={u.Name}/>)}*/}
            </div>
        );
    }
}

export default Contributors;