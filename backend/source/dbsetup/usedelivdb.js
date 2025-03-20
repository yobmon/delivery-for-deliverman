const mongoose = require('mongoose');

const Delivery = new mongoose.Schema(
{
 name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    
       
},
{ timestamps: true }
)
const Deliver = mongoose.model('Deliver',Delivery)
module.exports= Deliver; 