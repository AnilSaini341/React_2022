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
        this.ButtonclickHandler3=this.ButtonclickHandler3.bind(this);
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
    ButtonclickHandler=()=>{
        alert("Hello 1");
        console.log(this);
    }
    ButtonclickHandler2(){
        alert("Hello 2");
        console.log(this.props);
    }
    ButtonclickHandler3(){
        alert("Hello 3");
        console.log(this.props);
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
            <button onClick={this.ButtonclickHandler} > Event Binding Method 1</button>
            <button onClick={this.ButtonclickHandler2.bind(this)} > Event Binding Method 2</button>
            <button onClick={this.ButtonclickHandler3} > Event Binding Method 3</button>
            </div>
        )
    }
}

export default Person;