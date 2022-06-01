import React, { Component } from 'react';
import SearchWeather from './SearchWeather';
import ReasultWeather from './ReasultWeather';
class Weather extends Component {

    constructor(props){
        super(props);
        this.state={
            lat:"",
            long:"",
            city:"",
            weatherData:null,
        };
    }

    changeHandler=(event)=>{
        const name =event.target.name;
        if(name==="lat"){
            this.setState({
                lat: event.target.value,
            })
        }else if(name==="long"){
            this.setState({
                long: event.target.value,
            })  
        }else if(name ==="city"){
            this.setState({
                city:event.target.value,
            })
        }

        //console.log(name);
    };

    locationHandler=()=>{
        this.setState({
            lat:"",
            long:"",
            city:"",
            weatherData:null,
        });
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (res)=>{
                    setTimeout(()=>{
                            this.setState({
                                lat:res.coords.latitude,
                                long:res.coords.longitude,
                            });
                        },500);
                    //console.log(res);
                    
                },
                (error)=>{
                    console.log(error);
                }
            )
        }
        else{
            console.log("Location is not Supported");
        }
    };

    render() {
        return (
            <div className='container p-5'>
                <SearchWeather
                lat={this.state.lat}
                long={this.state.long}
                city={this.state.city}
                weatherData={this.state.weatherData}
                change={this.changeHandler}
                getLocation={this.locationHandler}
                >

                </SearchWeather>
                <ReasultWeather></ReasultWeather>
            </div>
        );
    }
}

export default Weather;