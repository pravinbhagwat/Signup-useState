import React, { useState } from "react";

const Signup = () => {
  let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    let [cnfPass, setCnfPass] = useState("");
    let [err, setErr] = useState("");
    let [success, setSuccess] = useState("");


  

  const handleBtnClick = () => {
    if(name === "" || email === "" || pass === "" || cnfPass === ""){
      setErr("Error : All the fields are mandatory");
    }
    else if(pass !== cnfPass){
        setErr("Error : Please make sure your passwords and confirm passwords match!");
    }
    else{
        setErr("");
        setSuccess("Successfully Created!");
    }
  };

  return (
    <div className="inner-container">
      <h2>Create Account</h2>
      <div className="socialLink">
        <div className="link">
          <img src="./images/google.png" alt="logo" />
          <span>Sign up with Google</span>
        </div>
        <div className="link">
          <img src="./images/facebook.png" alt="logo" />
          <span>Sign up with Facebook</span>
        </div>
      </div>
      <p className="separator">-OR-</p>
      <div className="inp">
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Full Name" />
        <input type="email"onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" />
        <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Password" />
        <input type="password" onChange={(e)=>setCnfPass(e.target.value)}placeholder="Confirm Password" />
        <button className="btn" onClick={handleBtnClick}>Create Account</button>
      </div>
      <div className="display">
        {
            err ? <span style={{color: '#FE597B'}}>{err}</span> : <span style={{color: '#7CD2D7'}}>{success}</span>
        }
      </div>
    </div>
  );
}

export default Signup;