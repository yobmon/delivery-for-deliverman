const mongoose =require('mongoose')

async function Connectdb(){
    // Connect to local MongoDB
    try{

    
    await mongoose.createConnection("mongodb://127.0.0.1:27017/deliveries")
    console.log('connected for deilver db')
    }
    catch(err){
        console.log(err,'error here in 2nd database')
    }
    



}


module.exports=Connectdb;