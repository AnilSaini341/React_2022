import React from 'react';
import axios from 'axios';
//import axios from '../src/Services/Instance';

function CreatePost(props) {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
        const title=event.target.title.value;
        const body=event.target.body.value;
        const author=event.target.author.value;
        const data={title,body,author}; // Method 2
        // axios.post("posts",{       // Method1 
        //     title,                 
        //     body,
        //     author,
        // })
        axios.post("posts",data) // Method 2
        .then(response =>{
            console.log(response);
            event.target.reset();
        })
        .catch(error =>{
            console.log(error);
        });
    };
    return (
        <div className='container'>
            <h2 className='text-center'>Create Post Form</h2>
            <form onSubmit={onSubmitHandler}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input required type="text" className="form-control" name="title"></input>
        </div>
        <div className="form-group">
            <label htmlFor="body">Body</label>
            <input required type="text" className="form-control" name="body"></input>
        </div>
        <div className="form-group">
            <label htmlFor="author">Author</label>
            <input required type="text" className="form-control" name="author"></input>
        </div>
        <div className="form-group mt-4 mb-5">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        
</form>
        </div>
    );
}

export default CreatePost;