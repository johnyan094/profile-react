import * as React from 'react';
import * as Constant from '../Constant'
import { Experience } from './experience'
import { SectionInner } from '../../section/index'

export class ExperienceWrapper extends React.Component {

  public render() {
    return (
      <div>
        <div className='title' />
        <SectionInner>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Datacom</a>
              <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">COCA-COLA AMATIL</a>
              <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Z-Order</a>
              <a className="nav-item nav-link" id="nav-test-tab" data-toggle="tab" href="#nav-test" role="tab" aria-controls="nav-test" aria-selected="false">ONTEMPO</a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <Experience
                exp={Constant.DataComClient}
                company=''
                subText='I have been contracted by Datacom to the below clients in a full-time capacity (on-site) as a Software Engineer'
                date='Oct 2014 – Current'
              />
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <Experience
                exp={Constant.CCAClient}
                company=''
                subText=''
                date='Feb 2013 – Oct 2014'
                isCCA = {true}
              />
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <Experience
                exp={Constant.ZorderClient}
                company=''
                subText=''
                date='November 2012 – Dec 2012'
              />
            </div>
            <div className="tab-pane fade" id="nav-test" role="tabpanel" aria-labelledby="nav-test-tab">
              <Experience
                exp={Constant.OntempoClient}
                company=''
                subText=''
                date='July 2012 – November 2012'
              />
            </div>
          </div>
        </SectionInner>
      </div>
    );
  }
}