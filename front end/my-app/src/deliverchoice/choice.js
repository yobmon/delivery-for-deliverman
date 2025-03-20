import React from 'react';
import './choice.css';

import { Contextvalue } from '../stateprovider/provider';





function  Choice({name,price,id}){
    const [{foods,catchemail},dispatch]= Contextvalue();
   
    

   
    const deletechoice=(e)=>{
e.preventDefault();
dispatch({
    type:'remove',
    item:{
        id:id
    }
})
    }




    
return(
<>
<div className="choice" >
    <div className='mybtn' key={id}>
<h1>{name}</h1>
<h1 className='price'>{price}</h1>
</div>
<button onClick={deletechoice}>x</button>
</div>
<br></br>

          
</>

)
}








export default Choice;
