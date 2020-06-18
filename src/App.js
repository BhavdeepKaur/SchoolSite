import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
	    
		<div className = "App">
		  <CustomNavbar/>
		  <Switch>
		    <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
			<Route path="/contact" component={Contact} />
		  </Switch>
		  <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;