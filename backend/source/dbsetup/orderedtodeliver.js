const mongoose= require('mongoose');    
const Orderlist= new mongoose.Schema({

foodname:{type:String },
price:{type:Number},
status :{type:String,default:'pending'},



}

)
const Order = mongoose.model('Order',Orderlist)

module.exports=Order;