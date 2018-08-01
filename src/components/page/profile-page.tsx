import * as React from 'react';
import * as Constant from './Constant'
import {SectionMainBody,SectionSide} from '../section/index'
import {AboutMe, ContactMe, Education, Experience, SocialLink} from './profile/index'

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
            <div id="accordion">

            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Datacom
                  </button>
                </h5>
              </div>

              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                <Experience 
                  exp = {Constant.DataComClient} 
                  company = 'Datacom'
                  subText = 'I have been contracted by Datacom to the below clients in a full-time capacity (on-site) as a Software Engineer'
                  date = 'Oct 2014 – Current'
                />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    CCA
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                <Experience 
                exp = {Constant.CCAClient} 
                company = 'COCA-COLA AMATIL'
                subText = ''
                date = 'Feb 2013 – Oct 2014'
              />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Z-Order
                  </button>
                </h5>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                <Experience 
                exp = {Constant.ZorderClient} 
                company = 'Z-Order'
                subText = ''
                date = 'November 2012 – Dec 2012'
              />
                </div>
              </div>
            </div>

              <div className="card">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      ONTEMPO
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div className="card-body">
                  <Experience 
                  exp = {Constant.OntempoClient} 
                  company = 'ONTEMPO'
                  subText = ''
                  date = 'July 2012 – November 2012'
                />
                  </div>
                </div>
              </div>
            </div>
          </SectionMainBody>
          <SectionMainBody name='Interest' />
        </div>
      );
    }
}


