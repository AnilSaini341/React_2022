import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route
//   } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import DummyUsers from './DummyUsers';
import CreatePost from './CreatePost';

function Appme(props) {
    return (
        // <Router>
        // <Navbar />
        // <Switch>
        //     <Route path="/about">
        //         <Header title="About" subtitle="About Page Sub"/>
        //         <About pagename="About Us" />
        //     </Route>
        //     <Route path="/contact">
        //         <Header title="Contact" subtitle="Contact Page Sub"/>
        //         <Contact pagename="Contact Us" />
        //     </Route>
        //     <Route path="/createpost">
        //         <Header title="Create Post" subtitle="Create Post Page"/>
        //         <CreatePost pagename="Create Post Page" />
        //     </Route>
        //     <Route path="/dummyuser">
        //         <Header title="Dummy Users" subtitle="Dummy Page Sub"/>
        //         <DummyUsers pagename="Home Page" />
        //     </Route>
        //     <Route exact path="/">
        //         <Header title="Home" subtitle="Home Page Sub"/>
        //         <Homepage pagename="Home Page" />
        //     </Route>
        //     <Route path="*">
        //         <div className='text-center p-5'><h2>Page Not Found.</h2></div>
        //     </Route>
        // </Switch>
        // <Footer />
        // </Router>
        <>
        <Navbar />
        <Routes>
            
        
        <Route path='/about' exact element={<About />} />
        <Route path='/createpost' exact element={<CreatePost />}/>
        <Route path='/dummyuser' exact element={<DummyUsers />}/>
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/' exact element={<Homepage />}></Route>
        
        
      </Routes>
      <Footer />
      </>
    );
}

export default Appme;