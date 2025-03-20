const mongoose= require('mongoose');
const Foodlist= new mongoose.Schema({

foodname:{type:String },
price:{type:Number},
status :{type:String,default:'pending'}


    
}
)
const Food = mongoose.model('Food',Foodlist)
module.exports= Food;