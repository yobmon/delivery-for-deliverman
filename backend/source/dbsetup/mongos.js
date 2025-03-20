
const mongoose = require('mongoose');
const mydb = new mongoose.Schema({
name:String,
email:{type:String,
    required:true
},
password:String

})
const User = mongoose.model('User',mydb)
module.exports=User;
