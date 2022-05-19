import React from 'react';

function Greeting(props) {
    return (
        <div>
            <div className='container card p-3 mt-3 register-container text-center'>
                <h3>Name: {props.name}</h3>
                <h3>Thank You for joining us. </h3>
                <h3>Varification sent to Email:  {props.email}</h3>
            </div>
        </div>
    );
}

export default Greeting;
