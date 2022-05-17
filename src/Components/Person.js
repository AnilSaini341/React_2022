import React,{ Component } from "react";
import {Man} from './Man';

class Person extends Component {
    constructor(props){
        super(props);
        this.props=props
    }
    render(){
        console.log(this.props);
        return(
            <div className="text-center">
            <h2>Hi, {this.props.name} , Age:{this.props.age} Years</h2>
           
            {/* <Man /> */}
            </div>
        )
    }
}

export default Person;