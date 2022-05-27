import React, { Component } from 'react';
import HeaderWeather from './HeaderWeather';
import HomeWeather from './HomeWeather';
import Weather from './Weather';
import { Routes, Route, Link } from "react-router-dom";

class Appweather extends Component {
    render() {
        return (
            <div className='container-fluid p-0'>
                
                <HeaderWeather />
                <Routes>
                <Route path="weather" element={<Weather />} />
                <Route exact path="/" element={<HomeWeather />} />
                </Routes>

            </div>
        );
    }
}

export default Appweather;