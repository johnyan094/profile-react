import * as React from 'react';
import { SectionInner } from '../../section/index'


interface ISubExpProps {
    exp: ClientExp;
}

export class SubExp extends React.Component<ISubExpProps> {
    constructor(props: ISubExpProps) {
        super(props);
    }

    public render() {
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
        if (this.props.exp.project.length > 0) {
            projectEle =
                <div>
                    <div>Projects</div>
                    <ul>
                        <li>{project}</li>
                    </ul>
                </div>
        }

        let workFor;
        switch (this.props.exp.workFor) {
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
        if (this.props.exp.workForText) {
            workForText = <div className='work-for-text' dangerouslySetInnerHTML={{ __html: this.props.exp.workForText }} />;
        }

        let date = null;
        if (this.props.exp.date) {
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

interface IExperienceProps {
    exp: ClientExp[],
    company: string,
    date: string,
    subText: string
}

export class Experience extends React.Component<IExperienceProps> {

    constructor(props: IExperienceProps) {
        super(props);
    }

    public render() {

        const subExps = this.props.exp.map(
            (item) => {
                return <SubExp key={item.name} exp={item} />
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
        workForText?: string) {
        this.name = name;
        this.responsibility = responsibility;
        this.project = project;
        this.workFor = workFor;
        this.date = date;
        this.workForText = workForText;
    }
}