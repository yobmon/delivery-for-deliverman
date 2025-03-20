import React from 'react'; 
import { useState } from 'react'; 
import './header.css';
import { Link } from 'react-router-dom';
import { Contextvalue } from '../stateprovider/provider';
import { useEffect } from 'react';
function Header() { 
 const[{catchemail},dispatch]=Contextvalue();
 useEffect(() => {
  console.log("Updated catchemail in Header:", catchemail);
}, [catchemail]); 
 console.log(dispatch)
    const [show, setShow] = useState(false);




    const openNav = (e) =>{e.preventDefault();
         setShow(true)};
    const closeNav = (e) =>{
      
        e.preventDefault();
         setShow(false);}
  



      
    return (
        <div>
      <header class="header">
        <div className="logo">Join Us</div>
        <nav className="nav">
        {catchemail && <a href="/thisu"> Hello: {catchemail}</a>
        
        
        
        
        }
      
            <a href="#about">About</a>
            <Link to="/sign">
            <a href="#signin">Sign In</a>
            
            </Link>
            <Link to="/home">
          
            <a href='llogos'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></a>
            </Link>
       <a href="#signin" className='btn'> <button className="openbtn" onClick={openNav}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg></button></a>  
        </nav>
    </header>
    <div id="mySidebar" className={`sidebar ${show? 'open' : ''}`}>
        <a href="/sx" className="closebtn" onClick={closeNav}>
          &times;
        </a>

     


        <a href="/saa">About</a>
        <a href="/asxa">Services</a>
        <Link to="/Deliver">
        <p >delivers</p>
        </Link>
        <a href="/asxasx">Contact</a>
      </div>
 </div>
 
    );
}   





export default Header;  

