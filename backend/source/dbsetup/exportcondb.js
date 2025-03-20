const mongoose= require('mongoose');

async function orderedfoods(){
    // Connect to local MongoDB
    try{

    
    await mongoose.createConnection("mongodb://127.0.0.1:27017/orderedfoods")
    console.log('connected for orderedfoods db')
    }
    catch(err){
        console.log(err,'error here in 2nd database')
    }
    



}


module.exports=orderedfoods;