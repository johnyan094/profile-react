import * as React from 'react';
import {SectionInner} from '../../section/index'

export class Experience extends React.Component {

    public render() {
      return (
        <div className='experience'>
            <div className='title'>
                Full Stack Developer
            </div>
            <SectionInner>
                <div className='subtitle'>
                    Datacom
                </div>
                <br />
                <div>Oct 2014 - Current</div>
                <div>I have been contracted by Datacom to the below clients in a full-time capacity (on-site) as a Software Engineer</div>
                <br />
                
                <div className='contract-to'>
                    Client: {client.asb.name}
                </div>
                <br />
                <div>
                    <div>Responsibilities</div>
                    <ul>
                        <li>{client.asb.responsibility}</li>
                    </ul>
                </div>

           </SectionInner>
        </div>
      );
    }
}

export class ClientExp {
    public name: string;
    public responsibility: string[];
    public project: string[];

    constructor(name: string, responsibility: string[], project: string[])
    {
        this.name = name;
        this.responsibility = responsibility;
        this.project = project;
    }
}

const client = {
    asb: new ClientExp(
        'ASB',
        [
            `Full stack application development using AngularJS, Typescript,
        ReactJS, c#, selenium, specflow, unit test, integration test,
        octopus deploy(PowerShell), WEBAPI, T-SQL`
        ],
        [
            'ASB FNC features',
            'Personal loan',
            'Investment fund application',
            'Overdraft application',
            'Manage fund application',
            'Online share trading'
        ]
    ),
    iag: 
    {
        name: 'IAG',
        responsibility: `Full stack application development using AngularJS, Typescript,
        ReactJS, c#, selenium, specflow, unit test, integration test,
        octopus deploy(PowerShell), WEBAPI, T-SQL`
    }
}
