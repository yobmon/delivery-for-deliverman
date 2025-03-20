import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import "./userlogin.css";
import { Contextvalue } from '../stateprovider/provider';
import { useNavigate } from "react-router-dom";
import { useAuthstore } from "../authstore";

function Userlog(){
   const[{foods,catchemail},dispatch]=Contextvalue()
   console.log(foods,catchemail)
  const[email,setemail]= useState('');
    const[password,setpassword]= useState('');
    const {authuser,setauthuser}= useAuthstore;
    const navigate = useNavigate();


        const handlesubmit=async(e)=>{

e.preventDefault();
try{
    const loginsub= await fetch('http://localhost:8081/login',{
      method:'POST',
      headers:{
        "content-Type":"application/json"
      },
      body: JSON.stringify({email,password})

    })
    if(!loginsub.ok){
        throw new Error('invalid credential')
         
    }
    const data =  await loginsub.json();
    console.log("Login successful:", data);

localStorage.setItem("token",data.token);
try{




dispatch({
    type:'catchemail',
    item:data.name

})
const user = {name:data.name}
setauthuser(user);
navigate('/')
}

catch(err){
    console.log("error while passing argument")
}

}
catch(err){
    console.log(err,'error while login')
}




    }

return(
    <div className="page-wrapper">
    <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handlesubmit}>
            <div className="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e)=>setemail(e.target.value)} required />
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                    <input type="password"  id="password" name="password" placeholder="Enter your password" onChange={(e)=>{setpassword(e.target.value)}} required />
            </div>
            <button type="submit" class="login-button">Login</button>
        </form>
        <div className="extra-links">
            <a href="#ergr">Forgot Password?</a>
            <Link to='/signin'>
            <a href="#retgs">Create an Account</a>
            </Link>
        </div>
    </div>
</div>

  
);

}
export default Userlog;