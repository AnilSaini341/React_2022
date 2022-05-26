import React, { Component } from 'react';
import axios from 'axios';

class DummyUsers extends Component {

    constructor(props){
        super(props);
        this.state={
            posts:null,
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            // console.log(response.data);
            this.setState({posts:response.data},()=>
                console.log(this.state));
            })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
        let posts;
        if(this.state.posts!=null){
            posts=this.state.posts.map((post, index) =>{
                return(
                    // <h3 key={index}>S.No:- {index} | {post.title}, Age:{post.body} </h3>
                    <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>S. No</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Info</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={index}>
                        <td>{post.id}</td>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                      </tr>
                    </tbody>
                  </table>
                )
            });
        }
        else{
            posts =<h3 className='text-center m-5'>No Records Found</h3>;
        }
        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default DummyUsers;