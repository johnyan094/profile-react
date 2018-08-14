import * as React from 'react';
/* tslint:disable */
interface INavProps{
  onClick: (pageNumber: number)=>void;
}

interface INavStates{
  activeNav: number;
}

export class Nav extends React.Component<INavProps,INavStates> {

  constructor(props: INavProps){
    super(props);
      this.state = {
        activeNav: 1
    };
  }

  public handleOnclick(navIndex: number)
  {
    this.props.onClick(navIndex);
    this.setState(
      {
        activeNav: navIndex
      }
    );
  }

  public getClassName(index: number) {
    let active = this.state.activeNav == index ? ' active' : ' ';
    return 'flex-sm-fill text-sm-center nav-link' + active;
  }
  
    public render() {
      return (
        <div>
          <nav className="nav nav-pills flex-column flex-sm-row">
            <a className={this.getClassName(1)} href="#" onClick = {() =>this.handleOnclick(1)} >Profile</a>
            <a className={this.getClassName(2)}  href="#" onClick = {() =>this.handleOnclick(2)}>Blog</a>
            {/* <a className={this.getClassName(3)}  href="#" onClick = {() =>this.handleOnclick(3)}>Link</a>
            <a className={this.getClassName(4)}  href="#" onClick = {() =>this.handleOnclick(4)}>Disabled</a> */}
          </nav>
        </div>
      );
    }
}

interface INavItemProps{
  active: boolean;
  name: string;
}

export class NavItem extends React.Component<INavItemProps> {

  constructor(props: INavItemProps){
      super(props);
  }

  public render() {
      let activeClass = this.props.active ? 'active' : '';

      return (
        <a className ={"flex-sm-fill text-sm-center nav-link" + activeClass} href="#">{this.props.name}</a>
      );
  }
}