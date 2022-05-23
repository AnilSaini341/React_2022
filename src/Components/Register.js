import React from 'react';
import Styled from "styled-components";


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

    const StyledButton=Styled.button`
    display:${props=>props.flag ==="1" ? "display-inline" : "block"};;
    padding:8px 7px;
    background-color:${props=>props.bgcolor};
    color:white;
    border:none;
    margin:4px;
    width:${props=>props.flag ==="1" ? "48.2%" : "100%"};
    border-radius:4px;
    `;
    const MainConatiner=Styled.div`
    width:550px;
    &:hover{
        box-shadow:0px 0px 5px grey;
    }
    @media(min-width:0px) and (max-width:600px){
        width:320px !important;
    }
    `;
        
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
                <StyledButton type='button' flag="1" bgcolor="orange">login</StyledButton>
                <StyledButton type='button' flag="1" bgcolor="green">Login With Google</StyledButton>
                <StyledButton type='button' flag="0" bgcolor="blue">Login With Facebook</StyledButton>
            </form>
        </div>
    );
}

export default Register;