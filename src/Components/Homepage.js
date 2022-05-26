import React,{useState} from 'react';

function Homepage(props) {
  const[name,setName]=useState("Anil ");
    return (
        <div>
            <div className="container-fluid bg-2 text-center">
  <h3>{props.pagename}</h3>
  <button type='button' className="btn btn-primary m-3" onClick={()=>{setName("Anil Saini")}}>Change {name}</button>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
</div>

<div className="container-fluid bg-3 text-center">
  <h3>Where To Find Me?</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
        </div>
        
    );
}

export default Homepage;