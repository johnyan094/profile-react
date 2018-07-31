import * as React from 'react';

export class SocialLink extends React.Component {

    public render() {
      return (
        <div className='social-link'>
            <div>
                <i className="fab fa-facebook" />
                <a href='https://www.facebook.com/si.ji.16'>https://www.facebook.com/si.ji.16</a>
            </div>
            <div>
                <i className="fab fa-linkedin" />
                <a href='https://www.linkedin.com/in/john-yan-2b839189/'>https://www.linkedin.com/in/john-yan-2b839189/</a>
            </div>
            <div>
                <i className="fab fa-stack-overflow" />
                <a href='https://stackoverflow.com/users/3188910/justwe?tab=profile'>https://stackoverflow.com/users/justwe</a>
            </div>
        </div>
      );
    }
}