import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import Header from './Header';

function Appme(props) {
    return (
        <Router>
        <Navbar />
        <Switch>
            <Route path="/about">
                <Header title="About" subtitle="About Page Sub"/>
                <About pagename="About Us" />
            </Route>
            <Route path="/contact">
                <Header title="Contact" subtitle="Contact Page Sub"/>
                <Contact pagename="Contact Us" />
            </Route>
            <Route path="/">
                <Header title="Home" subtitle="Home Page Sub"/>
                <Homepage pagename="Home Page" />
            </Route>
        </Switch>
        <Footer />
        </Router>
    );
}

export default Appme;