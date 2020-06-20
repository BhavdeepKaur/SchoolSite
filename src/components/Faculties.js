import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle,CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderFaculty({fac}) {
    return(
        <div key={fac.id} className="col-4 mt-5">
            <Card tag="li">
                <CardImg top width="100%" src={fac.image} alt={fac.name} />
                <CardHeader id="ch"><b><center>{fac.name}</center></b></CardHeader>
                <CardBody>
                    <CardTitle><b><center>{fac.designation}</center></b></CardTitle>
                    
                    <CardText><b><center><a className="btn btn-social-icon" href="mailto:{fac.email}"><i className="fa fa-envelope-o"></i></a>
                        : {fac.email}</center></b></CardText>
                </CardBody>   
            </Card>
        </div>
    );
}

export default function Faculties(props){
    const faculty = props.faculty.map((fac) => {
        return (
            <RenderFaculty fac={fac} />
        );
    });

    return(
        <div>
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Faculties</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h2>Meet Our Pride</h2>
                    <hr />
                </div>                
            </div>
            <div className = "row">
                <div className = "col-12">
                    <CardDeck list>
                        {faculty}
                    </CardDeck>

                </div>
            </div>
        </div>
        </div>
    )
}