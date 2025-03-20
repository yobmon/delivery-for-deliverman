import React from "react";
import './cart.css'
import{io} from 'socket.io-client';
import {Contextvalue} from "../stateprovider/provider";
import { useAuthstore } from '../authstore';
import Choice from "../deliverchoice/choice";
import Header from "../header/header";


function Cart(){
const[{foods}]=Contextvalue();

const {authuser}= useAuthstore()


const Procced=async(e)=>{
  //payment check amoutfunction left
  e.preventDefault();
if (authuser) {
  const socket = await io('http://localhost:9095')
await socket.emit('message',foods)
console.log(foods)
  
}
else{
console.log('user is not authenticated', authuser)
}
  
}



return(
<>

<div>

   <Header />
    <br></br>
{ 

foods.map((newfood)=>(<Choice  
          name={newfood.name}
          price={newfood.price}
        id={newfood.id}

          />)) }
                <button onClick={Procced} disabled={!authuser}>Proceed to Check</button>

          
</div>

</>
)
}


export default Cart;