import React, { Component } from 'react';
import SearchWeather from './SearchWeather';
import ReasultWeather from './ReasultWeather';
class Weather extends Component {
    render() {
        return (
            <div className='container p-5'>
                <SearchWeather></SearchWeather>
                <ReasultWeather></ReasultWeather>
            </div>
        );
    }
}

export default Weather;