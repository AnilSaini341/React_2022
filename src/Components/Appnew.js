import React, { Component } from 'react';
import '../App.css';
import Register from './Register';
import Greeting from './Greeting';

class Appnew extends Component {

    constructor(props){
        super(props);
        //this.state=state;
        this.state={
            isRegister:false,
            name:null,
            email:null,
            password:null,
        };
    }

    registrationSubmit = (event) => {
        event.preventDefault();
        const name= event.target.name.value;
        const email= event.target.email.value;
        const password= event.target.password.value;
        this.setState({name,email,password,isRegister:true},()=>{

        });
    }

    render() {
        return (
            <div>
                {
                this.state.isRegister 
                ? <Greeting name={this.state.name} email={this.state.email}/> 
                : <Register submit={this.registrationSubmit} />
                }
            </div>
        );
    }
}

export default Appnew;