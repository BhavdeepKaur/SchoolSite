import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
    Dropdown, DropdownItem, DropdownToggle, DropdownMenu,NavItem } from 'reactstrap';
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
                <Link to="/"> <img src='assets/school.jpg' 
                height="100" width="110" alt='School' />
				</Link>
            </NavbarBrand>
            
        
            <Collapse navbar>
                <Nav navbar className="ml-auto">
                    <NavItem >
                        <NavLink className="nav-link"  to='/'><span className="fa fa-home fa-lg">
                            </span> Home</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg">
                            </span> About Us</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink className="nav-link"  to='/news'><span className="fa fa-bell fa-lg">
                            </span> News</NavLink>
                    </NavItem>
					<NavItem >
                        <NavLink className="nav-link"  to='/contact'><span className="fa fa-address-card fa-lg">
                            </span> Contact Us</NavLink>
                    </NavItem>
                    <Dropdown nav >
                        <DropdownToggle nav caret>
                            Academics
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem> <NavLink className="nav-link"  to='/curriculum'>
                                Header</NavLink>
                            </DropdownItem>
                            <DropdownItem> <NavLink className="nav-link"  to='/faculties'>
                                Action</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </Collapse>
          </Navbar> 
        </div>
		)
  }
} 