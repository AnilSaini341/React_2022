import React from 'react';

function ReasultWeather(props) {
    console.log(props);
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

        if(props.isSearched == true){
            showonPage= <div className='container mt-5 mb-5'>
            <div className='row'>
            <div className='col-4 pb-3'>
                <div className='card border-primary'>
                <h4 className='text-center'>Recent</h4>
              
            </div>
            </div>
            <div className='col-8'>
                <div className='card border-primary'>
                    <div className='card-body'>
                         <div className='text-center'>Loading <i className="fa fa-spinner fa-spin mt-2" aria-hidden="true"></i></div>
                         </div>
            </div>
            </div>
            </div>
            </div>
        }else{
            
            showonPage=  <div className='col mt-4'>
                <div className='card border-primary'>
                    <div className='card-body'>
                         <h4 className='text-center'>Please Search a City</h4>
                         </div>
                         </div>
            </div>
        }

    }else{
        let rdata;
            if(props.recent==null){
                rdata=""
            }
            else{
                rdata=props.recent.map((recentdata,index)=>{
                    return <li key={index}>{recentdata.city}</li>
                });
            }
        showonPage=  <div className='container mt-5 mb-5'>
            <div className='row'>
            <div className='col-4 pb-3'>
                <div className='card border-primary'>
                <h4 className='text-center'>Recent</h4>
                <ul className='list-unstyled text-center'>{rdata}</ul>
            </div>
            </div>
            <div className='col-8'>
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
        </div>
    }
    return (
        <>{showonPage}</>
    );
}

export default ReasultWeather;