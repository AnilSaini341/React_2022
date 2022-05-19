import React, { Component } from 'react';

class ControlledComponent extends Component {

    constructor(props){
        super(props);
        this.props=props;
        this.state={
            name:"Anil Saini",
        };
    }

    changeHandler = (event) =>{
        console.log("Old Data: ", this.state);
        const name=event.target.value;
        this.setState({name:name},()=>{
            console.log("Updated Data: ", this.state);
        });
    }
    
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="">Name</label> &nbsp;&nbsp;
                        <input type="text"
                         name="name" 
                         value={this.state.name} 
                         onChange={this.changeHandler}>
                         </input>
                    </div>
                    </form>
            </div>
        );
    }
}

export default ControlledComponent;