import * as React from 'react';
import { SectionMainBody, SectionSide } from '../section/index'
import { AboutMe, ContactMe, Education, ExperienceWrapper, ProfilePic, SocialLink, Skills } from './profile/index'

export class ProfilePage extends React.Component {

  public render() {
    return (
      <div>
        <div className='row blade' />
        <div className="row">
          <ProfileSideBar />
          <ProfileBody />
        </div>
      </div>
    );
  }
}



export class ProfileSideBar extends React.Component {

  public render() {
    return (
      <div className="col-12 col-md-4">
        <div>
          <ProfilePic />
          <SectionSide name='About Me'>
            <AboutMe />
          </SectionSide>

          <SectionSide name='Contact Me'>
            <ContactMe />
          </SectionSide>

          <SectionSide name='Social Links'>
            <SocialLink />
          </SectionSide>

          <SectionSide name='Professional Skills'>
            <Skills />
          </SectionSide>
        </div>
      </div>
    );
  }
}

export class ProfileBody extends React.Component {

  public render() {
    return (
      <div className="col-12 col-md-8">
        <SectionMainBody name='Academic Education'>
          <Education />
        </SectionMainBody>
        <SectionMainBody name='Work Experience'>
          <ExperienceWrapper />
        </SectionMainBody>
        <SectionMainBody name='Interest' />
      </div>
    );
  }
}


