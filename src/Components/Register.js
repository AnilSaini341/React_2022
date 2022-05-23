import React from 'react';


function Register(props) {
     
    //  let btnStyle={
    //     backgroundColor:"green",
    //     color:"white",
    // };
    let btnClasses=["btn","m-1"];
    let showBtnText, passwordBoxType;

    if(props.showPass === true){
        // btnStyle.backgroundColor="red";
        showBtnText="Hide Password";
        passwordBoxType="text";
        btnClasses.push("btn-danger");
    }else{
        showBtnText="Show Password";
        passwordBoxType="password";
        btnClasses.push("btn-success");
    }
    //console.log(btnClasses);
        
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
                    <input type={passwordBoxType} name="password" required className='form-control'/>
                </div>
                <div className='form-group mt-3'>
                <button type='submit' className='btn btn-primary m-1'>Register</button>
                {/* <button type='button' className='btn m-1' onClick={props.click} style={btnStyle} >{showBtnText}</button> */}
                <button type='button' className={btnClasses.join(" ")} onClick={props.click} >{showBtnText}</button>
                </div>
               
            </form>
        </div>
    );
}

export default Register;