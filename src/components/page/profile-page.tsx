import * as React from 'react';
import {SectionMainBody,SectionSide} from '../section/index'
import {AboutMe, CCAClient, ContactMe, DataComClient, Education, Experience, SocialLink} from './profile/index'

export class ProfilePage extends React.Component {

    public render() {
      return (
        <div className="row">
            <ProfileSideBar/>
            <ProfileBody/>
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

            <SectionSide name='Professional Skills'/>
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
          {/* <SectionMainBody name='Professional Qualification' /> */}
          <SectionMainBody name='Work Experience'>
            <div className='title'>
                Full Stack Developer
            </div>
            <Experience 
              exp = {DataComClient} 
              company = 'Datacom'
              subText = 'I have been contracted by Datacom to the below clients in a full-time capacity (on-site) as a Software Engineer'
              date = 'Oct 2014 – Current'
            />
            <Experience 
              exp = {CCAClient} 
              company = 'COCA-COLA AMATIL'
              subText = ''
              date = 'Feb 2013 – Oct 2014'
            />
          </SectionMainBody>
          <SectionMainBody name='Interest' />
        </div>
      );
    }
}


