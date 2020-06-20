import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(props) {
    return(
    <div className="footer" id="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h2>Links</h2>
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li><br></br>
                        <li><Link to='/about'>About Us</Link></li><br></br>
                        <li><Link to='/news'>News</Link></li><br></br>
                        <li><Link to='/contact'>Contact Us</Link></li><br></br>
                        <li><Link to='/curriculum'>Curriculum</Link></li><br></br>
                        <li><Link to='/facilities'>Facilities</Link></li><br></br>
                        <li><Link to='/faculties'>Faculties</Link></li><br></br>
                        <li><Link to='/tc'>Transfer Certificate</Link></li>
                    </ul>
                </div>
                <div className="col-8 col-sm-5">
                    <h2>Our Address</h2>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:nextgen@school.net">
                        nextgen@school.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:nextgen@school.net"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 New Gen School</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;