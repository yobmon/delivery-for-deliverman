import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Deliver(){
    const [email,setemail]=useState('');
    const [password,setpassword]= useState('');
const Navigate = useNavigate()
    const handlesubmit=async(e)=>{
      e.preventDefault();
      const delivauth = fetch('http://localhost:8089/deliverlog',
        ({
method:'POST',
header:{
    "content-type":"application/json"
},
body:JSON.stringify({email,password})


        } )
      )
if(!delivauth){
    throw new Error('invalid credential')
}
const data = await delivauth.json()
localStorage.setItem("token",data.token)


      Navigate('/deliverui')






    }


return(
    <div className="page-wrapper">
    <div className="login-container">
        <h2 className="login-title">login in for deliveries</h2>
        <form className="login-form"  onSubmit={handlesubmit}>
            <div class="input-group">
          
                <label for="email">Email</label>
                <input type="email" id="email" value={email} name="email"placeholder="Enter your email" onChange={(e)=>setemail(e.target.value)} required />
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                    <input type="password" id="password" value={password} name="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)} required />
            </div>
            <button type="submit" className="login-button"  >login</button>
        </form>
    
    </div>
</div>

)





}


export default Deliver;