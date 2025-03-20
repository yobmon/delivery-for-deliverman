const Food = require('../../usefoodsdb');
const order = require('../dbsetup/orderedtodeliver');

async function checkandsend(){
  try{
    
const pendings =  await  Food.find({status:'pending'}).select('-_id foodname price')
if(pendings.length>=10){
await Food.updateMany({}, { "$set": { status: 'delivered' } })
for (let item of pendings){
  const saveorder=await new order({
      foodname:item.foodname,
      price:item.price


  })
  await saveorder.save();
}
   

}


 

}
catch(err){
    console.log(err)
}




}


module.exports=checkandsend;    