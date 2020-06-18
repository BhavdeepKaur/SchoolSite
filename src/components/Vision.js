import React, { Component } from 'react';
import {Card} from 'reactstrap';

export default class Vision extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>Our Vision</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Our vision at New Gen School is to empower students to acquire, demonstrate, 
                                articulate and value knowledge and skills that will support them, as life-long learners,
                                to participate in and contribute to the global world and practise the core values of the 
                                school: respect, tolerance & inclusion, and excellence.{' '}
                            </p>
                        
                       </blockquote>
                    </Card.Body>
                </Card>
            </div>   
        )
    } 
}

