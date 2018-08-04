import * as React from 'react';
import { SectionInner } from '../../section/index'

export class Education extends React.Component {

    public render() {
        return (
            <div className='education'>
                <h4 className='title'>
                    Bachelor of Computer Science (The University of Auckland)
                </h4>
                <div>
                    <SectionInner>
                        <div>Principles of Programming</div>
                        <div>Fundamentals of Database Systems</div>
                        <div>Enterprise Software Development</div>
                        <div>Distributed Objects, Services and Programming</div>
                        <div>Software Construction</div>
                        <div>Algorithms and data structures</div>
                        <div>Human Computer Interaction</div>
                    </SectionInner>
                </div>
            </div>
        );
    }
}