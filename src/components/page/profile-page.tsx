import * as React from 'react';
import { SectionMainBody, SectionSide } from '../section/index'
import { AboutMe, ContactMe, Education, ExperienceWrapper, SocialLink } from './profile/index'

export class ProfilePage extends React.Component {

  public render() {
    return (
      <div className="row">
        <ProfileSideBar />
        <ProfileBody />
      </div>
    );
  }
}



export class ProfileSideBar extends React.Component {

  public render() {
    return (
      <div className="col-12 col-sm-4">
        <div>
          <SectionSide name='About Me'>
            <AboutMe />
          </SectionSide>

          <SectionSide name='Contact Me'>
            <ContactMe />
          </SectionSide>

          <SectionSide name='Social Links'>
            <SocialLink />
          </SectionSide>

          <SectionSide name='Professional Skills' />
        </div>
      </div>
    );
  }
}

export class ProfileBody extends React.Component {

  public render() {
    return (
      <div className="col-12 col-sm-8">
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


