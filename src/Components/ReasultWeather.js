import React from 'react';

function ReasultWeather(props) {
    //console.log(props.weatherData);
    const { weatherData:data } =props; //Object Destruction Method
    function ktoc(k){
        return (k-273.15).toFixed(2)+ " C";
    }
    function getTheDate(stamp){
        const date= new Date(stamp*1000);
        return date.toTimeString();
    }

    let showonPage;
    if(data == null){
        showonPage= <div className='container mt-5 mb-5'>
            <div className='col'>
                <div className='card border-primary'>
                    <div className='card-body'>
                         <div className='text-center'>Loading...</div>
                         </div>
            </div>
            </div>
            </div>
    }else{
        showonPage=  <div className='container mt-5 mb-5'>
            <div className='col'>
                <div className='card border-primary'>
                    <div className='card-body'>
                        <h4 className='card-title p-2 border-bottom'>
                            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='' />
                           { data.name} {ktoc(data.main.temp)} {data.weather[0].description}
                        </h4>
                        <b className='card-text p-2 d-block border-bottom'>Feels Like : {ktoc(data.main.feels_like)}</b>
                        <b className='card-text p-2 d-block border-bottom'>Min Temp : {ktoc(data.main.temp_min)}</b>
                        <b className='card-text p-2 d-block border-bottom'>Max Temp : {ktoc(data.main.temp_max)}</b>
                        <b className='card-text p-2 d-block border-bottom'>Sunrise Time : {getTheDate(data.sys.sunrise)}</b>
                        <b className='card-text p-2 d-block'>Sunset Time : {getTheDate(data.sys.sunset)}</b>
                    </div>
                </div>
            </div>
        </div>
    }
    return (
        <>{showonPage}</>
    );
}

export default ReasultWeather;