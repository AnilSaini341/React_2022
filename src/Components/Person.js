import React,{ Component } from "react";
import Man from './Man';

class Person extends Component {
    render(){
        return(
            <div>
            <div>Name:Anil Saini</div>
            <div>Age:30 Years</div> <br></br>
            <Man />
            </div>
        )
    }
}

export default Person;