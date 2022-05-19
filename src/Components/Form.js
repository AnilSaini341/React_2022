import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.props=props;
        this.state={};
    }
    nameChangeHandler=(event)=>{
        console.log("Name : "+event.target.value);
    }
    selectChange=(event)=>{
        console.log("Select : "+event.target.value);
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="">Name</label> &nbsp;&nbsp;
                        <input type="text" name="name" onKeyUp={this.nameChangeHandler}></input>
                    </div>
                    <div>
                        <label htmlFor="">Select</label>&nbsp;&nbsp;
                        <select onChange={this.selectChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;