import * as React from 'react';

export class SocialLink extends React.Component {

    public render() {
        return (
            <div className='social-link row'>
                <div className='col-6'>
                    <a target="_blank" href='https://www.linkedin.com/in/john-yan-2b839189/'><i className="fab fa-linkedin" /></a>
                </div>
                <div className='col-6'>
                    <a target="_blank" href='https://stackoverflow.com/users/3188910/justwe?tab=profile'><i className="fab fa-stack-overflow" /></a>
                </div>
            </div>
        );
    }
}