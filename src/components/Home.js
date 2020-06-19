import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Card, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody} from 'reactstrap';
import { Jumbotron, Row, Col, Image, Button, Carousel } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div id = "maindiv">  
      <div  className = "container">
        <Jumbotron>
        <font color="BLACK">
        <marquee behavior="alternate" direction="up" width="80%">
            <marquee direction="right" behavior="alternate" ><span class="badge badge-danger">NEW!! </span> Admissions are Open for new session!!</marquee>
        </marquee>
        </font>
          <Row>
              <Col lg={8}>
                <h2>Welcome to New Gen School</h2>
                <p>This is where we rebuild heart, mind and soul of a Child. Safety is our prime concern.</p>
                <Link to="/about">
                    <Button bsStyle="primary">Learn More</Button>
                </Link>
              </Col>
              <Col >
                <img className = "mr-5" src="assets/school.jpg" alt="School"></img>
              </Col>
          </Row> 
        </Jumbotron>
		
		    <Carousel>
                <Carousel.Item>
                    <img
                        className="img-responsive"
                        src="assets/school-1.jpg"
                        alt="First slide"
						width="400px"
                    />
                    <Carousel.Caption>
                        <h1>Learn</h1>
                        <p> <i> Nulla vitae elit libero, a pharetra augue mollis interdum.</i> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-responsive"
                        src="assets/school-2.jpg"
                        alt="First slide"
						width="350px"
						height="200px"
                    />
                    <Carousel.Caption>
                        <h1>Play</h1>
                        <p> <i> Nulla vitae elit libero, a pharetra augue mollis interdum. </i> </p>
                    </Carousel.Caption>
                </Carousel.Item>
				<Carousel.Item>
                    <img
                        className="img-responsive"
                        src="assets/school-3.jpg"
                        alt="First slide"
						width="350px"
                    />
                    <Carousel.Caption>
                        <h1>Grow</h1>
                        <p> <i> Nulla vitae elit libero, a pharetra augue mollis interdum.</i> </p>
                    </Carousel.Caption>
                </Carousel.Item>
				<Carousel.Item>
                    <img
                        className="img-responsive"
                        src="assets/school-4.jpg"
                        alt="First slide"
						width="400px"
                    />
                    <Carousel.Caption>
                        <h3 style={{color:"green"}}>Live your Best Life @New Gen School</h3>
                        <p> <i> Nulla vitae elit libero, a pharetra augue mollis interdum.</i> </p>
                    </Carousel.Caption>
                </Carousel.Item>
  
            </Carousel>
            <div>
                 <br></br>
            </div>
		<div> 
            <h2 id="cen1"> Our Vision </h2>
            <h4> <i> Our vision at New Gen School is to empower students to acquire, demonstrate, 
                articulate and value knowledge and skills that will support them, as life-long learners,
                to participate in and contribute to the global world and practise the core values of the 
                school: respect, tolerance & inclusion, and excellence.</i> </h4>
            <br></br> 
            <br></br>
            <h2 id="cen2"> Our Mission </h2> 
            <h4> <i>Is to enable all learners' access to learning through the provision of:-
                <ul>
                    <li> differentiated, in-depth and cohesive learning programs aligned to year
                         level content and achievement standards informed by the Australian curriculum.
                    </li>
                    <li> a quality inclusive learning environment that is responsive to student voice.

                    </li>
                    <li> enriching, engaging resources</li>
                    <li> opportunities for community and parents to participate in learning and decision
                         making partnerships.
                    </li>
                </ul> </i>
            </h4>

            
		</div><br></br>
		<div>
            <h2 id="cen2"> <u>Our Achievers 2019-2020 </u></h2> <br></br>
            <Row className="show-grid text-center">
                
                <Col xs={12} sm={4} className="person-wrapper">
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardImg top width="100%" src="/assets/person-1.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Robin</CardTitle>
                            <CardSubtitle>Grade 10</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          
                        </CardBody>
                    </Card>
                </Col>
            
                <Col xs={12} sm={4} className="person-wrapper">
                    <Card body inverse color="info">
                        <CardImg top width="100%" src="/assets/person-2.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Riff</CardTitle>
                            <CardSubtitle>Grade 12</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Card body inverse color="danger">
                        <CardImg top width="100%" src="/assets/person-3.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Venessa</CardTitle>
                            <CardSubtitle>Grade 8</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          
                        </CardBody>
                    </Card>
                </Col>
            </Row>
		</div>
      </div>
      </div>
    )
  }
}