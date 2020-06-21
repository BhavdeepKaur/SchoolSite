import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle,CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderFacility({fa}) {
    return(
        <div key={fa.id} className="col-6 mt-5">
            <Card tag="li" body color = {fa.color}>
            <CardImg top width="100%" src={fa.image} alt={fa.name} />
                <CardHeader id="ch"><b><center>{fa.name}</center></b></CardHeader>
                <CardBody color = {fa.color}>
                    <CardTitle><b><center>{fa.des}</center></b></CardTitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default function Facilities(props){
    const facility = props.facility.map((fa) => {
        return (
            <RenderFacility fa={fa} />
        );
    });

    return(
        <div>
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Facilities</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h2>Facilities By Next Gen</h2>
                    <hr />
                </div>                
            </div>
            <div className = "row">
                <div className = "col-12">
                    <CardDeck list>
                        {facility}
                    </CardDeck>

                </div>
            </div>
        </div>
        </div>
    )
}
        
