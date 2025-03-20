export const initial={
    foods:[],
    catchemail:null

};



const reducer=(state,action)=>{


switch(action.type){
case 'mo':
  
    
   return{
    
       ...state,
       foods:[...state.foods,action.item],
       
      
   }
   case 'remove' :
    let index = state.foods.findIndex(
        (theindex)=>theindex.id===action.id
    )
   
    
    state.foods.splice(index,1)
    return{
        ...state,
        basket: [...state.foods]

    }
    case 'catchemail':
        return{
        ...state,
        
        catchemail: action.item
        }


      
   default:
    return state;


}
}

export default reducer;