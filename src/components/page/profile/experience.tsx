import * as React from 'react';
import {SectionInner} from '../../section/index'


interface ISubExpProps{
    exp: ClientExp;
}

export class SubExp extends React.Component<ISubExpProps> {
    constructor(props: ISubExpProps){
        super(props);
    }

    public render () {
        const responsibility = this.props.exp.responsibility.map(
            (item) => {
                return <li key={item}>{item}</li>
            }
        )

        const project = this.props.exp.project.map(
            (item) => {
                return <li key={item}>{item}</li>
            }
        )

        let projectEle = null;
        if(this.props.exp.project.length > 0) {
            projectEle = 
                    <div>
                        <div>Projects</div>
                        <ul>
                            <li>{project}</li>
                        </ul>
                    </div>
        }

        let workFor;
        switch(this.props.exp.workFor)
        {
            case WorkFor.Client:
                workFor = <div className='project-title'>
                            Client: {this.props.exp.name}
                          </div>
                break;
            case WorkFor.Project:
            workFor = <div className='project-title'>
                        Project: {this.props.exp.name}
                      </div>
            break;
        }

        let workForText = null;
        if(this.props.exp.workForText)
        {
            workForText = <div className='work-for-text' dangerouslySetInnerHTML={{ __html: this.props.exp.workForText }}/>;
        }

        let date = null;
        if(this.props.exp.date)
        {
            date = <div>{this.props.exp.date}</div>
        }

        return (
            <div>
                {workForText}
                {workFor}
                {date}
                <br />
                <div>
                    <div>Responsibilities</div>
                    <ul>
                        <li>{responsibility}</li>
                    </ul>
                    {projectEle}
                </div>
            </div>
        );
    }
}

interface IExperienceProps{
    exp: ClientExp[],
    company: string,
    date: string,
    subText: string
}

export class Experience extends React.Component<IExperienceProps> {

    constructor(props: IExperienceProps){
        super(props);
    }

    public render() {

        const subExps = this.props.exp.map(
            (item) => {
                return <SubExp key={item.name} exp = {item} />
            }
        )

      return (
        <div className='experience'>
            <SectionInner>
                <div className='subtitle'>
                    {this.props.company}
                </div>
                <br />
                <div>{this.props.date}</div>
                <div>{this.props.subText}</div>
                <br />
                {subExps}
           </SectionInner>
        </div>
      );
    }
}

export enum WorkFor {
    Client,
    Project
}

export class ClientExp {
    public name: string;
    public responsibility: string[];
    public project: string[];
    public workFor: WorkFor;
    public date?: string;
    public workForText?: string;

    constructor(name: string, 
        responsibility: string[], 
        project: string[], 
        workFor: WorkFor, 
        date?: string,
        workForText?: string)
    {
        this.name = name;
        this.responsibility = responsibility;
        this.project = project;
        this.workFor = workFor;
        this.date = date;
        this.workForText = workForText;
    }
}

export const DataComClient :ClientExp[] = [

     new ClientExp(
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
        ],
        WorkFor.Client,
        'July 2016 – Current'
    ),
    new ClientExp(
        'IAG',
        [
            `Application development using Angular js, Typescript, soapUI
            and google analytics, c#, MSSQL`
        ],
        [
            'ASB quoting application'
        ],
        WorkFor.Client,
        'March 2016 – July 2016'
    ),
    new ClientExp(
        'COCA COLA AMATIL',
        [
            `Started with enhancing one of the current CCA productmanagement apps`,
            `Later on, developed into remote app to take advantage for using the remote app(access from any device, anywhere)`
        ],
        [],
        WorkFor.Project,
        '',
        `Oct 2014 – March 2016<br \>
        I was employed full time at Datacom on the following projects:
        `
    ),
    new ClientExp(
        'Powerco',
        [
            `Took ownership of the Powerco project and lead team member to the road of success. (Powerco CWMS and Gas HUB)`,
            `Large applications enhancement, fast learning and knowledge transfer to team member`,
            `Ongoing Applications daily BAU supports for Powerco`,
            `Communicate and maintain close business relationship with Powerco analyst to resolve BAU tasks and project work`
        ],
        [],
        WorkFor.Project
    ),
    new ClientExp(
        'Australia council Canning & Wollongong',
        [
            'Took ownership of the HP TRIM integration project with the city councils over in Australia',
            'Take full advantage of the HP TRIM record management component help local government to better manage their records along with integrations of the ms word addin and Kana(LAGAN) web api'
        ],
        [],
        WorkFor.Project
    ),
    new ClientExp(
        'Carter NZ',
        [
            'Took ownership of the Carter New Zealand enhancement project',
            'Analysis various options to improve the www.carterstrade.co.nz performance and search capture',
            'Took advantage using the google analytics event tracking to help capture uses input and later on produce google report for carters to analysis'
        ],
        [],
        WorkFor.Project
    )
]

export const CCAClient :ClientExp[] = [
    new ClientExp(
        'QuickTap',
        [
            `Developed QuickTap application to encourage vending for
            COCA-COLA AMATIL. https://www.quicktap.co.nz/ and
            https://register.quicktap.com.au/
            `,
            'Implemented Push Notification on both front-end (Android) and windows service to handle back-end (C#,TSQL)',
            `Personally develop and maintain the administrator web for
            admins https://register.quicktap.com.au/administrator/ which
            serve and promote vending to BHP and Serco Australia`
        ],
        [],
        WorkFor.Project
    )
]