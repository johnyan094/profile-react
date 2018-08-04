import * as React from 'react';
import profilePic from './me.jpg';

export class ProfilePic extends React.Component {

    public render() {
        return (
            <div className='profile-pic'>
                <img src={profilePic} />
                <div className='profile-title'>
                    <h1>John Yan</h1>
                    <h4>Full Stack Developer</h4>
                </div>
            </div>
        );
    }
}