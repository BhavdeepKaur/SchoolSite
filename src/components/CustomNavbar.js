import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
    Dropdown, DropdownItem, DropdownToggle, DropdownMenu,NavItem } from 'reactstrap';
import {NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
	    <div>
          <Navbar expand="md" dark className = "fixed-top">
		    <NavbarToggler />
            <NavbarBrand className="mr-auto" href="/">
                <Link to="/home"> <img src='assets/school.jpg' 
                height="100" width="110" alt='School' />
				</Link>
            </NavbarBrand>
            
        
            <Collapse navbar>
                <Nav navbar className="ml-auto">
                    <ul><li><NavItem >
                        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg">
                            </span> Home</NavLink>
                    </NavItem></li>
                    <li><NavItem >
                        <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg">
                            </span> About Us</NavLink>
                    </NavItem></li>
                    <li><NavItem >
                        <NavLink className="nav-link"  to='/news'><span className="fa fa-bell fa-lg">
                            </span> News</NavLink>
                    </NavItem></li>
					<li><NavItem >
                        <NavLink className="nav-link"  to='/contact'><span className="fa fa-address-card fa-lg">
                            </span> Contact Us</NavLink>
                    </NavItem></li>
                    
                   
                    <li><NavDropdown title="Academics" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/curriculum">Curriculum</NavDropdown.Item>
                        <NavDropdown.Item href="/faculties">Faculties</NavDropdown.Item>
                    </NavDropdown></li>
                    <li><NavDropdown title="Others" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/facilities">Facilities</NavDropdown.Item>
                        <NavDropdown.Item href="/tc">Transfer Certificate</NavDropdown.Item>
                    </NavDropdown></li></ul>
                    
                </Nav>
            </Collapse>
          </Navbar> 
        </div>
		)
  }
} 