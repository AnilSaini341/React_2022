import React, { Component } from 'react';
import SearchWeather from './SearchWeather';
import ReasultWeather from './ReasultWeather';
import axios from 'axios';
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

    searchHandler = () =>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=39754004f543a6ef6f5c355f0a252248`)
                            .then((result)=>{
                                   // console.log(result);
                                    this.setState({
                                        city:result.data.name,
                                        weatherData:result.data
                                    });
                                })
                            .catch((error)=>{
                                    console.log(error);
                                });
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
                    //console.log(res);
                    setTimeout(()=>{
                            this.setState({
                                lat:res.coords.latitude,
                                long:res.coords.longitude,
                            });
                            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.coords.latitude}&lon=${res.coords.longitude}&appid=39754004f543a6ef6f5c355f0a252248`)
                            .then((result)=>{
                                   // console.log(result);
                                    this.setState({
                                        city:result.data.name,
                                        weatherData:result.data
                                    });
                                })
                            .catch((error)=>{
                                    console.log(error);
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
                <>
                <SearchWeather
                lat={this.state.lat}
                long={this.state.long}
                city={this.state.city}
                change={this.changeHandler}
                getLocation={this.locationHandler}
                weatherData={this.state.weatherData}
                search={this.searchHandler}
                >
                </SearchWeather>

                <ReasultWeather 
                weatherData={this.state.weatherData}
                >

                </ReasultWeather>
                </>
            </div>
        );
    }
}

export default Weather;