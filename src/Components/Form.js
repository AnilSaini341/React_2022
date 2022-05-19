import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.props=props;
        this.state={
            name:null,
            country:null,
        };
    }

    // nameChangeHandler=(event)=>{
    //     console.log("Name : "+event.target.value);
    // }

    // selectChange=(event)=>{
    //     console.log("Select : "+event.target.value);
    // }
    formSubmit=(event)=>{
        event.preventDefault();   //Used for Stop page Refresh
        console.log(this.state);
        const name=event.target.name.value;
        const country=event.target.country.value;
        this.setState({name:name,country:country},()=>{
            console.log(this.state);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <div>
                        <label htmlFor="">Name</label> &nbsp;&nbsp;
                        {/* <input type="text" name="name" onKeyUp={this.nameChangeHandler}></input> */}
                        <input type="text" name="name"></input>
                    </div>
                    <div>
                        <label htmlFor="">Select</label>&nbsp;&nbsp;
                        <select name="country">
                        {/* <select onChange={this.selectChange}> */}
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;