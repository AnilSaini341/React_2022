import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../Services/Instance';
class DummyUsers extends Component {

    constructor(props){
        super(props);
        this.state={
            posts:null,
        }
    }

    componentDidMount(){
        axios.get("posts")
        .then((response)=>{
            // console.log(response.data);
            this.setState({posts:response.data},()=>
                console.log(this.state));
            })
        .catch((error)=>{
            console.log(error);
        });
    }

    deleteHandler = (id) => {
        // alert(id);
        axios.delete("posts/"+id)
        .then((response)=>{
             console.log(response);
            })
        .catch((error)=>{
            console.log(error);
        })
    }

    render() {
        let posts;
        if(this.state.posts!=null){
            return (<table className="table table-bordered">
                   <thead>
                      <tr>
                        <th>S. No</th>
                         <th>UserId</th>
                         <th>Title</th>
                         <th>Info</th>
                         <th>Actions</th>
                   </tr>
                     </thead>
                     <tbody>
                { posts=this.state.posts.map((post, index) =>   (
                    <tr key={index}>
                                 <td>{post.id}</td>
                                 <td>{post.userId}</td>
                                 <td>{post.title}</td>
                                 <td>{post.body}</td>
                                 <td><button type="button" className='btn btn-danger' 
                                 onClick={()=>this.deleteHandler(post.id)}>Delete</button></td>
                               </tr>
                )) } 
                </tbody></table>);
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