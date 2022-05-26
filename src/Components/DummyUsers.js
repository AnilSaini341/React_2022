import React, { Component } from 'react';
import axios from 'axios';

class DummyUsers extends Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Dummy Users Page</h2>
            </div>
        );
    }
}

export default DummyUsers;