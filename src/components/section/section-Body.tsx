import * as React from 'react';

interface ISectionBodyProps{
  name: string;
}

export class SectionSide extends React.Component<ISectionBodyProps> {

  constructor(props: ISectionBodyProps){
    super(props);
  }

  public render() {
    return (
      <div className='section-body'>
          <div className='header'>
            <span>{this.props.name}</span>
          </div>
          <div className='body'>
            {this.props.children}
          </div>
      </div>
    );
  }
}

interface ISectionMainBodyProps{
  name: string;
}

export class SectionMainBody extends React.Component<ISectionMainBodyProps> {

  constructor(props: ISectionMainBodyProps){
    super(props);
  }

  public render() {
    let icon;
    switch(this.props.name)
    {
      case 'Academic Education':
        icon = 'fas fa-graduation-cap';
        break;
      case 'Professional Qualification':
        icon = 'fas fa-suitcase';
        break;
      case 'Work Experience':
        icon = 'fas fa-flask';
        break;
      case 'Interest':
        icon ='far fa-laugh-beam';
        break;
      default:
        icon = '';
    }

    return (
      <div className='section-main-body'>
          <div className='header'>
            <div className='left'><i className={icon} style={{fontSize:'24px'}}/></div>
            <div className='right'>{this.props.name}</div>
          </div>
          <div className='body'>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export class SectionInner extends React.Component {

  public render() {
    return (
      <div className='section-inner col-12'>
        {this.props.children}
      </div>
    );
  }
}