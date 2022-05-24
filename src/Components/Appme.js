import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';

function Appme(props) {
    return (
        <div>
        <Navbar />
        <Homepage />
        <About />
        <Contact />
        <Footer />

        </div>
    );
}

export default Appme;