import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import About from './About.js';
import News from './News';
import Contact from './Contact';
import Curriculum from './Curriculum';
import Faculties from './Faculties';
import Facilities from './Facilities';
import TC from './TC';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';

const mapStateToProps = state => {
  return {
    leaders: state.leaders,
    faculty: state.faculty,
    notices: state.notices,
    facility: state.facility
  }
}

class Main extends Component {
    constructor(props) {
      super(props);
      
    }
    render() {

        return(

            <div>


                <CustomNavbar/>
		            <Switch>
		                <Route exact path="/home" component={Home} />
                    <Route path="/home" component={Home} /> 
                    <Route path="/about" component={() => <About leaders={this.props.leaders} />} />} /> 
                    <Route path="/news" component={() => <News notices={this.props.notices} />} />} />
			              <Route path="/contact" component={Contact} />
                    <Route path="/curriculum" component={Curriculum} />
                    <Route path="/faculties" component={() => <Faculties faculty={this.props.faculty} />} />} />
                    <Route path="/facilities" component={() => <Facilities facility={this.props.facility} />} />} />
                    <Route path="/tc" component={TC} />
                    <Redirect to="/home" />
		            </Switch>
                <Footer />
            </div>
        );
    } 
}

export default withRouter(connect(mapStateToProps)(Main));