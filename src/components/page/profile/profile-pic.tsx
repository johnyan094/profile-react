import * as React from 'react';
import profilePic from './me.jpg';

export class ProfilePic extends React.Component {

    public render() {
        return (
            <div className='profile-pic'>
                <img src={profilePic} />
            </div>
        );
    }
}