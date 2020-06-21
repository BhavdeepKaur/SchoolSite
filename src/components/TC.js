import React, {Component} from 'react';
import Rosy_TC from '../pdfs/Rosy.pdf';
import Benetton_TC from '../pdfs/Benetton2.pdf';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class TC extends Component {
    render() {
      return (
        <div className = "container">
          <hr></hr>
          <div></div>
          <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Transfer Certificates</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h2>Requested Transfer Certificates</h2>
                    <hr />
                </div>                
          </div>
          <a href={Rosy_TC} target="_blank" rel="noopener noreferrer" download>
            <Button>
              <i className="fa fa-download"/>
              Rosy_TC
            </Button>
          </a>
          <hr></hr>
          <a href={Benetton_TC} target="_blank" rel="noopener noreferrer" download>
            <Button>
              <i className="fa fa-download"/>
              Benetton_TC
            </Button>
          </a>
          <hr></hr>
          <div className = "well">
            To request for Transfer Certificate of your child, kindly email at nextgen@school.net. 
          </div>
        </div>  
      );
    }
}