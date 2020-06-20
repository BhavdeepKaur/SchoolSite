import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle,CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderNotice({note}) {
    return(
        <div key={note.id} className="col-12 mt-5">
            <Card body outline color={note.color} tag="li">
                <CardHeader>{note.title}</CardHeader>
                <CardBody>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}{note.main}
                            {' '}
                        </p>
                        <footer className="blockquote-footer">
                            {note.date}
                        </footer>
                    </blockquote>
                </CardBody>
            </Card>
        </div>

    );
}

export default function News(props){
    const notices = props.notices.map((note) => {
        return (
            <RenderNotice note={note} />
        );
    });

    return(
        <div>
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>News</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h2>News Corner @NextGen</h2>
                    <hr />
                </div>                
            </div>
            <div className = "row">
                <div className = "col-12">
                    <CardDeck list>
                        {notices}
                    </CardDeck>

                </div>
            </div>
        </div>
        </div>
    )
}