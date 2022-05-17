import React,{ Component } from "react";
import {Man} from './Man';

class Person extends Component {
    constructor(props){
        super(props);
        this.props=props;
        this.state ={
            name:"Shyam",
            age:"22"
        };
    }
    nameChangeHandler(){
        //alert();
        console.log(this.state);
        this.setState({
            name:"RAM Shyam",
            age:"32"
        },()=>{
            console.log(this.state);
        });
    }
    render(){
        console.log(this.props);
        return(
            <div className="text-center">
            <h2>Hi, {this.props.name} , Age:{this.props.age} Years</h2>
            <h2>Hi, {this.state.name} , Age:{this.state.age} Years</h2>
            {/* <Man /> */}
            <br></br>
            <button onClick={()=>this.nameChangeHandler()}>Click Me</button>
            </div>
        )
    }
}

export default Person;