import React from "react";
import './foods.css';
import { Contextvalue } from "../stateprovider/provider";
import { useAuthstore } from "../authstore";

function Food({ id, name, price, image }) {
  
       const [{foods,catchemail},dispatch]= Contextvalue();



       const addtocart=()=>{
        dispatch({
        type:'mo',
        item:{
            id:id,
        name:name,
        price:price,
        
        }
      
      },
        
        
        )}      
    
       console.log("Contextvalue() output:", Contextvalue());

  return (
    <div className="card" key= {id}>
      <img src={image} alt={name} className="food-image" />
      <div className="container">
        <h4><b>{name}</b></h4> 
        <p>{price}</p>
        <button onClick={addtocart} className="button">Add food</button> 
      </div>
    </div>
  );
}

export default Food;
