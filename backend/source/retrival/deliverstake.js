const orderdb=require('../dbsetup/orderedtodeliver')



const Delivetake= async(req,res)=>{

var ordertodeliver= await orderdb.find({status:"pending"}).select('-_id foodname price')
if (ordertodeliver.length>=10){
    await orderdb.updateMany({}, { "$set": { status: 'delivered' } })  
    console.log('order delived') 
    res.status(200).json({
       ordertodeliver
    })

}else {
    res.status(200).json({
        "response":"order not found"
    })
}


}   



module.exports=Delivetake