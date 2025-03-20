import React from "react";
import './userlogin.css';
import { useState } from "react";
import "./userlogin.css"
import { useNavigate } from "react-router-dom";
import { Contextvalue } from '../stateprovider/provider';
import { useAuthstore } from "../authstore";
function Signin(){
    const [name,setname]= useState('');
    const[email,setemail]= useState('');
    const[password,setpassword]= useState('');
      const[{foods,catchemail},dispatch]=Contextvalue();
      const {authuser,setauthuser}= useAuthstore();
      console.log(foods,catchemail)
const navigate = useNavigate();
 const Handlesignin=async(e)=>{
e.preventDefault();
try{
const submit = await fetch('http://localhost:9095/signin',
    {method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({name,email,password})

}
)
if (!submit.ok){
    throw new Error('invalid credential')
}
const data =await submit.json() 
localStorage.setItem("token",data.token)
dispatch({
    type:'catchemail',
    item:data.name

})
navigate('/')
const user = {name:data.name}

setauthuser(user)

}
catch(err){
    console.log('error')
}
}
   
return(
    <div className="page-wrapper">
    <div className="login-container">
        <h2 className="login-title">sign in</h2>
        <form className="login-form"  onSubmit={Handlesignin}>
            <div class="input-group">
            <label for="name">name</label>
            <input type="name" id="name" value={name} name="name"placeholder="enter your name" onChange={(e)=>setname(e.target.value)} required />
                
                <label for="email">Email</label>
                <input type="email" id="email" value={email} name="email"placeholder="Enter your email" onChange={(e)=>setemail(e.target.value)} required />
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                    <input type="password" id="password" value={password} name="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)} required />
            </div>
            <button type="submit" className="login-button"  >signin</button>
        </form>
    
    </div>
</div>

  
);

}
export default Signin;