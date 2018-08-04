import * as React from 'react';

export class Skills extends React.Component {

  public render() {
    return (
        <div>
            <Skill name='AngularJS' exp={50} />
            <Skill name='ReactJS' exp={60} />
            <Skill name='Typescript' exp={65} />
            <Skill name='SASS' exp={70} />
            <Skill name='MVC' exp={80} />
            <Skill name='SQL' exp={85} />
            <Skill name='Java' exp={60} />
            <Skill name='Automation' exp={75} />
        </div>
    );
  }
}

interface ISkillProps {
    name: string;
    exp: number;
}

export class Skill extends React.Component<ISkillProps> {

    constructor(props: ISkillProps) {
        super(props);
    }

    public render() {
      return (
          <div className='row'>
            <div className='col-6 col-md-6 col-lg-6 exp-name'>{this.props.name}</div>
            <div className='col-6 col-md-6 col-lg-6 exp-wrapper'>
                <div className='exp-level' style={{width:`${this.props.exp}%`}} />
            </div>
          </div>
      );
    }
  }