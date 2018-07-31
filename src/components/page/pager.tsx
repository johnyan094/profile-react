import * as React from 'react';
import {ProfilePage} from '../page/profile-page'

interface IPagerProps{
    pager: number
  }

export class Pager extends React.Component<IPagerProps> {

    constructor(props: IPagerProps){
        super(props);
    }

    public render() {
        let pager;
        switch(this.props.pager)
        {
            case 1:
                pager = <ProfilePage />
                break;
            default:
                pager = <div>Generic page</div>
        }

        return (
            pager
        );
    }
}
