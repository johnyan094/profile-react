import * as React from 'react';

interface IInterestProps {
    name: string;
}

export class InterestWrapper extends React.Component {

    public render() {
        return (
            <div className='row interest'>
                {this.props.children}
            </div>
        );
    }
}
export class Interest extends React.Component<IInterestProps> {

    constructor(props: IInterestProps) {
        super(props);
    }

    public render() {
        return (
            <div className='col-6 interest'>
                {this.props.name}
            </div>
        );
    }
}