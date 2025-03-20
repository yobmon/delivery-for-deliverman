const mongoose = require('mongoose');
async function Connect(){
    try{
 await mongoose.connect('mongodb://localhost:27017')
 console.log('connected');
    }
catch{
    console.log('not connected')
}

}
module.exports = Connect;