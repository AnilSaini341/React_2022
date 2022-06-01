import React from 'react';

function SearchWeather(props) {
    return (
        <div className='container-fluid p-0'>
            <div className='container d-flex'>

            <div className='col-lg-5'>
            <div className="form-group">
            <label htmlFor="city">City Name:</label>
            <input required type="text" className="form-control" id="city" name="city" placeholder='Enter City Name' value={props.city} onChange={props.change} />
            </div>
            </div>

            <div className='col-lg-1 text-center'>
            <label htmlFor=""></label>
            <h5>OR</h5>
            </div>

            <div className='col-lg-5'>
            <div className="form-group">
            <label htmlFor="city">Go-Coordinates</label>
            <button className='btn fa fa-crosshairs' onClick={props.getLocation}></button>
            <div className='row'>
                <div className='latitude col-md-6'>
                <div className='bg-dark text-white rounded pt-1 pl-1 pr-1 col-lg-3'>Lat:</div>
            <input type="number" step="any" className="form-control col-lg-9" id="lat" name="lat" placeholder='' value={props.lat} onChange={props.change} /></div>
            <div className='longitute col-md-6'>
            <div className='bg-dark text-white rounded pt-1 pl-1 pr-1 col-lg-3'>Long:</div>
            <input type="number" step="any" className="form-control col-lg-9" id="long" name="long" placeholder='' value={props.long} onChange={props.change} />
            </div>
            </div>
            </div>
            </div>

            <div className='col-lg-1'>
                <label htmlFor=''>Search</label>
                <button className='btn btn-primary fa fa-search'></button>
            </div>


            </div>
        </div>
    );
}

export default SearchWeather;