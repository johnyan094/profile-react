import * as React from 'react';
import * as Common from '../src/common'
import './App.css';


// import logo from './logo.svg';

interface IAppState {
  pager: number;
}

class App extends React.Component<{}, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      pager: 1
    };

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  public handleNavClick(pagerNumber: number) {
    this.setState(
      {
        pager: pagerNumber
      }
    );
  }

  public render() {
    return (
      <div>
        <div className="container">
          <Common.Header />
          <Common.Nav onClick={this.handleNavClick} />
          <Common.Pager pager={this.state.pager} />
        </div>
        <div className='footer'>Some footer</div>
      </div>
    );
  }
}

export default App;