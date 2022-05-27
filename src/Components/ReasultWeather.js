import React from 'react';

function ReasultWeather(props) {
    return (
        <div className='container mt-5 mb-5'>
            <div className='col'>
                <div className='card border-primary'>
                    <div className='card-body'>
                        <h4 className='card-title'>City</h4>
                        <p className='card-text'>Country</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReasultWeather;