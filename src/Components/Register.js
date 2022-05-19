import React from 'react';


function Register(props) {
    return (
        <div className='container card p-3 mt-3 register-container'>
            <form onSubmit={props.submit}>
                <h3 className='text-center'>Registration Form</h3>
                <div className='form-group'>
                    <label htmlFor='name' >Name : </label>
                    <input type="text" name="name" required className='form-control'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='email' >Email : </label>
                    <input type="email" name="email" required className='form-control'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password' >Password : </label>
                    <input type="password" name="password" required className='form-control'/>
                </div>
                <div className='form-group mt-3'>
                <button type='submit' className='btn btn-primary'>Register</button>
                </div>
               
            </form>
        </div>
    );
}

export default Register;