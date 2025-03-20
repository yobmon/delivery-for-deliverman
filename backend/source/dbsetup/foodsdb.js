const mongoose = require('mongoose')

async function Foodsdb(){
    try{

await mongoose.createConnection("mongodb://127.0.0.1:27017/foods")
console.log('foods db created')
    }
    catch(err){
        console.log(err);

    }
}

module.exports= Foodsdb;